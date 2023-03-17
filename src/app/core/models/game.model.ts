import { TeamModel } from './team.model';

export interface GameModel {
  id: number;
  date: Date;
  home_team: TeamModel;
  home_team_score: number;
  period: number;
  postseason: boolean;
  season: number;
  status: string;
  time: string;
  visitor_team: TeamModel;
  visitor_team_score: number;
}
