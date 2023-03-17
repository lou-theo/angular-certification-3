import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GameModel } from '@core/models/game.model';
import { StatisticsModel } from '@core/models/statistics.model';
import { TeamModel } from '@core/models/team.model';
import { NbaService } from '@core/services/nba.service';
import { GenericDialogComponent } from '@shared/components/generic-dialog/generic-dialog.component';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-team-stats',
  templateUrl: './team-stats.component.html',
  styleUrls: ['./team-stats.component.css'],
  imports: [NgIf, NgFor, RouterLink, AsyncPipe, GenericDialogComponent],
  standalone: true,
})
export class TeamStatsComponent implements OnInit {
  @Input()
  team!: TeamModel;

  games$!: Observable<GameModel[]>;
  stats!: StatisticsModel;
  constructor(protected nbaService: NbaService) {}

  ngOnInit(): void {
    this.games$ = this.nbaService
      .getLastResults(this.team, 12)
      .pipe(tap((games) => (this.stats = this.nbaService.getStatsFromGames(games, this.team))));
  }
}
