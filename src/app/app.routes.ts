import { Routes } from '@angular/router';
import { Inicio } from './inicio/inicio';
import { AcercaDe } from './acerca-de/acerca-de';

export const routes: Routes = [
  { path: '', component: Inicio },
  { path: 'acerca-de-mi', component: AcercaDe },
];
