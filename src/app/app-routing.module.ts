import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/sokoban', pathMatch: 'full' },
  { path: 'sokoban', loadChildren: () => import('./sokoban/sokoban.module').then(m => m.SokobanModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
