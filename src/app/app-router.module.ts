import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, ROUTES } from '@angular/router';
import { BasicosComponent } from './ventas/pages/basicos/basicos.component';
import { NumeroComponent } from './ventas/pages/numero/numero.component';
import { NoComunesComponent } from './ventas/pages/no-comunes/no-comunes.component';
import { OrdenarComponent } from './ventas/pages/ordenar/ordenar.component';


const routes: Routes = [
  {
    path:'',
    component: BasicosComponent,
    pathMatch: 'full'
  },
  {
    path:'numeros',
    component: NumeroComponent
  },
  {
    path:'no-comunes',
    component:NoComunesComponent
  },
  {
    path:'ordenar',
    component: OrdenarComponent
  },
  {
    path: '**', 
    redirectTo: ''
  }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports:[
    RouterModule
  ]
})
export class AppRouterModule { }
