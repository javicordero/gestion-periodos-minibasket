import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MakeConvocatoriaComponent } from './make-convocatoria/make-convocatoria.component';
import { GameContainer } from './game/game.container';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'convocatoria',
    pathMatch: 'full',
  },
  {
    path: 'convocatoria',
    component: MakeConvocatoriaComponent,
  },
  {
    path: 'game',
    component: GameContainer,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
