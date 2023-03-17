import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { format, subDays } from 'date-fns';
import { map, Observable } from 'rxjs';
import { GameModel } from '../models/game.model';
import { StatisticsModel } from '../models/statistics.model';
import { TeamModel } from '../models/team.model';

@Injectable({
  providedIn: 'root',
})
export class NbaService {
  trackedTeams: TeamModel[] = [];

  constructor(private http: HttpClient) {}

  addTrackedTeam(team: TeamModel): void {
    this.trackedTeams.push(team);
  }

  removeTrackedTeam(team: TeamModel): void {
    const index = this.trackedTeams.findIndex((t) => t.id == team.id);
    this.trackedTeams.splice(index, 1);
  }

  getTrackedTeams(): TeamModel[] {
    return this.trackedTeams;
  }

  getAllTeams(): Observable<TeamModel[]> {
    return this.http.get<{ data: TeamModel[] }>(`teams?page=0`).pipe(map((res) => res.data));
  }

  getLastResults(team: TeamModel, numberOfDays = 12): Observable<GameModel[]> {
    return this.http
      .get<{ meta: unknown; data: GameModel[] }>(`games?page=0${this.getDaysQueryString(numberOfDays)}`, {
        params: { per_page: 12, 'team_ids[]': '' + team.id },
      })
      .pipe(map((res) => res.data));
  }

  getStatsFromGames(games: GameModel[], team: TeamModel): StatisticsModel {
    const stats: StatisticsModel = {
      wins: 0,
      losses: 0,
      averagePointsScored: 0,
      averagePointsConceded: 0,
      lastGames: [],
    };
    games.forEach((game) => {
      const gameStats = this.getSingleGameStats(team, game);
      stats.wins += gameStats.wins;
      stats.losses += gameStats.losses;
      stats.averagePointsScored += gameStats.averagePointsScored;
      stats.averagePointsConceded += gameStats.averagePointsConceded;
      stats.lastGames.push(gameStats.wins == 1 ? 'W' : 'L');
    });
    stats.averagePointsScored = Math.round(stats.averagePointsScored / games.length);
    stats.averagePointsConceded = Math.round(stats.averagePointsConceded / games.length);
    return stats;
  }

  private getDaysQueryString(nbOfDays = 12): string {
    let queryString = '';
    for (let i = 1; i < nbOfDays; i++) {
      const date = format(subDays(new Date(), i), 'yyyy-MM-dd');
      queryString = queryString.concat('&dates[]=' + date);
    }
    return queryString;
  }

  private getSingleGameStats(team: TeamModel, game: GameModel): StatisticsModel {
    const stats: StatisticsModel = {
      wins: 0,
      losses: 0,
      averagePointsScored: 0,
      averagePointsConceded: 0,
      lastGames: [],
    };
    if (game.home_team.id === team.id) {
      stats.averagePointsScored = game.home_team_score;
      stats.averagePointsConceded = game.visitor_team_score;
      if (game.home_team_score > game.visitor_team_score) {
        stats.wins += 1;
      } else {
        stats.losses += 1;
      }
    }
    if (game.visitor_team.id === team.id) {
      stats.averagePointsScored = game.visitor_team_score;
      stats.averagePointsConceded = game.home_team_score;
      if (game.visitor_team_score > game.home_team_score) {
        stats.wins = 1;
      } else {
        stats.losses = 1;
      }
    }
    return stats;
  }
}
