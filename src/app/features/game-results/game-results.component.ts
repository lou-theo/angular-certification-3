import { AsyncPipe, NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { teamAbbreviationRouteParameter } from '@core/constants/route-parameter.constant';
import { GameModel } from '@core/models/game.model';
import { TeamModel } from '@core/models/team.model';
import { NbaService } from '@core/services/nba.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-game-results',
  templateUrl: './game-results.component.html',
  styleUrls: ['./game-results.component.css'],
  imports: [NgIf, NgFor, RouterLink, AsyncPipe, NgTemplateOutlet],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameResultsComponent {
  team?: TeamModel;
  games$?: Observable<GameModel[]>;

  constructor(private activatedRoute: ActivatedRoute, protected nbaService: NbaService) {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.team = this.nbaService
        .getTrackedTeams()
        .find((team) => team.abbreviation === paramMap.get(teamAbbreviationRouteParameter));
      if (this.team) {
        this.games$ = this.nbaService.getLastResults(this.team);
      }
    });
  }
}
