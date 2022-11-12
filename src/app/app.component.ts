import { Component } from '@angular/core';

//PrimeNG
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre: string = 'franCiScO RomeRo';
  numero: number = 1000;
  
  constructor(private primengConfig: PrimeNGConfig){}
  ngOnInit(){
    this.primengConfig.ripple = true;
  }

  mostrarNombre(){
    console.log( this.nombre );
  }
}
