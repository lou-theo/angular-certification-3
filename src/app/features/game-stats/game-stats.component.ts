import { Component } from '@angular/core';
import { TeamModel } from '@core/models/team.model';
import { Observable, tap } from 'rxjs';
import { NbaService } from '@core/services/nba.service';
import { TeamStatsComponent } from '../team-stats/team-stats.component';
import { FormsModule } from '@angular/forms';
import { NgFor, AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-game-stats',
  templateUrl: './game-stats.component.html',
  styleUrls: ['./game-stats.component.css'],
  imports: [NgFor, FormsModule, TeamStatsComponent, AsyncPipe],
  standalone: true,
})
export class GameStatsComponent {
  teams$: Observable<TeamModel[]>;
  allTeams: TeamModel[] = [];

  constructor(protected nbaService: NbaService) {
    this.teams$ = nbaService.getAllTeams().pipe(tap((data) => (this.allTeams = data)));
  }

  trackTeam(teamId: string): void {
    const team = this.allTeams.find((team) => team.id == Number(teamId));
    if (team) this.nbaService.addTrackedTeam(team);
  }
}
