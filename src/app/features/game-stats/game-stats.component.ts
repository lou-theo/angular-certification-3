import { NgFor, TitleCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CONFERENCES } from '@core/constants/conference.constant';
import { DIVISIONS } from '@core/constants/division.constant';
import { TeamModel } from '@core/models/team.model';
import { NbaService } from '@core/services/nba.service';
import { LetModule } from '@ngrx/component';
import { FalsyToUndefinedPipe } from '@shared/pipes/falsy-to-undefined.pipe';
import { ShapeFilterPipe } from '@shared/pipes/shape-filter.pipe';
import { Observable, tap } from 'rxjs';
import { TeamStatsComponent } from '../team-stats/team-stats.component';

@Component({
  selector: 'app-game-stats',
  templateUrl: './game-stats.component.html',
  styleUrls: ['./game-stats.component.css'],
  imports: [NgFor, FormsModule, TeamStatsComponent, TitleCasePipe, LetModule, ShapeFilterPipe, FalsyToUndefinedPipe],
  standalone: true,
})
export class GameStatsComponent {
  CONFERENCES = CONFERENCES;
  DIVISIONS = DIVISIONS;

  teams$: Observable<TeamModel[]>;
  allTeams: TeamModel[] = [];

  constructor(protected nbaService: NbaService) {
    this.teams$ = nbaService.getAllTeams().pipe(tap((data) => (this.allTeams = data)));
  }

  trackTeam(teamId: string): void {
    const team = this.allTeams.find((team) => team.id == Number(teamId));
    if (team) {
      this.nbaService.addTrackedTeam(team);
    }
  }

  trackByTeamId(index: number, team: TeamModel): string {
    return team.id.toString();
  }

  trackByValue(index: number, value: string): string {
    return value;
  }
}
