import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
  { path: 'attempt-question', loadChildren: () => import('./attempt-question/attempt-question.module').then(m => m.AttemptQuestionModule) },
  { path: 'test-board/:id', loadChildren: () => import('./test-board/test-board.module').then(m => m.TestBoardModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
