import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', loadComponent: () => import('./features/home.component').then(component => component.HomeComponent),},
];
