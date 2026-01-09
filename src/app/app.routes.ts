import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'basic',
    title: 'Pipes Básicos',
    loadComponent: () => import('../app/pages/basic-page/basic-page'),
  },
  {
    path: 'numbers',
    title: 'Numbers Pipe',
    loadComponent: () => import('../app/pages/number-page/number-page'),
  },
  {
    path: 'uncommon',
    title: 'Pipes no tan comunes',
    loadComponent: () => import('../app/pages/uncommon-page/uncommon-page'),
  },
  {
    path: 'custom',
    title: 'Pipes Personalizados',
    loadComponent: () => import('../app/pages/custom-page/custom-page'),
  },
  {
    path: '**',
    redirectTo: 'basic',
  },
];
