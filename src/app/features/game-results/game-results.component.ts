import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GameModel } from '../../core/models/game.model';
import { TeamModel } from '../../core/models/team.model';
import { NbaService } from '../../core/services/nba.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-game-results',
  templateUrl: './game-results.component.html',
  styleUrls: ['./game-results.component.css'],
})
export class GameResultsComponent {
  team?: TeamModel;
  games$?: Observable<GameModel[]>;

  constructor(private activatedRoute: ActivatedRoute, private nbaService: NbaService) {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      this.team = this.nbaService.getTrackedTeams().find((team) => team.abbreviation === paramMap.get('teamAbbr'));
      if (this.team) this.games$ = this.nbaService.getLastResults(this.team);
    });
  }
}
