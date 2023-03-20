import { Routes } from '@angular/router';
import { GameStatsComponent } from '@app/features/game-stats/game-stats.component';
import { teamAbbreviationRouteParameter } from '@core/constants/route-parameter.constant';

const routes: Routes = [
  {
    path: `results/:${teamAbbreviationRouteParameter}`,
    loadComponent: () => import('./features/game-results/game-results.component').then((m) => m.GameResultsComponent),
  },
  {
    path: '**',
    loadComponent: () => GameStatsComponent,
  },
];

export default routes;
