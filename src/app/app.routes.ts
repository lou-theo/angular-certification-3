import { Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'results/:teamAbbr',
    loadComponent: () => import('./features/game-results/game-results.component').then((m) => m.GameResultsComponent),
  },
  {
    path: '**',
    loadComponent: () => import('./features/game-stats/game-stats.component').then((m) => m.GameStatsComponent),
  },
];

export default routes;
