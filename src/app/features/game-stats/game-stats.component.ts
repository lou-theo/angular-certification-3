import { AsyncPipe, NgForOf } from '@angular/common';
import { Component } from '@angular/core';
import { TeamSearchBarComponent } from '@app/features/team-search-bar/team-search-bar.component';
import { TeamModel } from '@core/models/team.model';
import { NbaService } from '@core/services/nba.service';
import { LetModule } from '@ngrx/component';
import { Observable, tap } from 'rxjs';
import { TeamStatsComponent } from '../team-stats/team-stats.component';

@Component({
  selector: 'app-game-stats',
  templateUrl: './game-stats.component.html',
  styleUrls: ['./game-stats.component.css'],
  imports: [TeamStatsComponent, TeamSearchBarComponent, NgForOf, LetModule, AsyncPipe],
  standalone: true,
})
export class GameStatsComponent {
  allTeams$: Observable<TeamModel[]>;
  allTeams: TeamModel[] = [];

  constructor(protected nbaService: NbaService) {
    this.allTeams$ = nbaService.getAllTeams().pipe(tap((data) => (this.allTeams = data)));
  }

  trackTeam(teamId: string): void {
    const team = this.allTeams.find((team) => team.id == Number(teamId));
    if (team) {
      this.nbaService.addTrackedTeam(team);
    }
  }
}
