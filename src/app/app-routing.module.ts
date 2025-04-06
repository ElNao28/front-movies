import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './shared/pages/not-found/not-found.component';
import { InvalidTokenComponent } from './shared/pages/invalid-token/invalid-token.component';

const routes: Routes = [
  {
    path: 'public',
    loadChildren: () =>
      import('./Modules/public/public.module').then((m) => m.PublicModule),
  },
  {
    path: 'admon',
    loadChildren: () =>
      import('./Modules/admon/admon.module').then((m) => m.AdmonModule),
  },
  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: 'url-expired',
    component: InvalidTokenComponent,
  },
  {
    path: '',
    redirectTo: 'public',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '404',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
