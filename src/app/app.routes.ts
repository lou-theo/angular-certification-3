import { Routes } from '@angular/router';
import { GameStatsComponent } from '@app/features/game-stats/game-stats.component';

const routes: Routes = [
  {
    path: 'results/:teamAbbr',
    loadComponent: () => import('./features/game-results/game-results.component').then((m) => m.GameResultsComponent),
  },
  {
    path: '**',
    loadComponent: () => GameStatsComponent,
  },
];

export default routes;
