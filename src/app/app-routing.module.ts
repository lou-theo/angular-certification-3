import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameResultsComponent } from './features/game-results/game-results.component';
import { GameStatsComponent } from './features/game-stats/game-stats.component';

const routes: Routes = [
  {
    path: 'results/:teamAbbr',
    component: GameResultsComponent,
  },
  {
    path: '**',
    component: GameStatsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
