import { ResultType } from './result.type';

export interface StatisticsModel {
  wins: number;
  losses: number;
  averagePointsScored: number;
  averagePointsConceded: number;
  lastGames: ResultType[];
}
