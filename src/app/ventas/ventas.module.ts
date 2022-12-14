import { NgModule } from '@angular/core';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { CommonModule } from '@angular/common';

import { NumeroComponent } from './pages/numero/numero.component';
import { NoComunesComponent } from './pages/no-comunes/no-comunes.component';
import { BasicosComponent } from './pages/basicos/basicos.component';
import { OrdenarComponent } from './pages/ordenar/ordenar.component';
import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { VuelaPipe } from './pipes/vuela.pipe';
import { OrdenarPipe } from './pipes/ordenar.pipe';




@NgModule({
  declarations: [
    NumeroComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenarComponent,

    //Pipes
    MayusculasPipe,
    VuelaPipe,
    OrdenarPipe
  ],
  exports:[
    NumeroComponent,
    NoComunesComponent,
    BasicosComponent,
    OrdenarComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  
})
export class VentasModule { }
