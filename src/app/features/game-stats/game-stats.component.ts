import { AsyncPipe, NgForOf } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TeamSearchBarComponent } from '@app/features/team-search-bar/team-search-bar.component';
import { TeamModel } from '@core/models/team.model';
import { NbaService } from '@core/services/nba.service';
import { LetModule } from '@ngrx/component';
import { Observable } from 'rxjs';
import { TeamStatsComponent } from '../team-stats/team-stats.component';

@Component({
  selector: 'app-game-stats',
  templateUrl: './game-stats.component.html',
  styleUrls: ['./game-stats.component.css'],
  imports: [TeamStatsComponent, TeamSearchBarComponent, NgForOf, LetModule, AsyncPipe],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GameStatsComponent {
  allTeams$: Observable<TeamModel[]>;

  constructor(protected nbaService: NbaService) {
    this.allTeams$ = nbaService.getAllTeams();
  }

  trackTeam(teamId: string): void {
    this.nbaService.addTrackedTeam(Number(teamId));
  }
}
