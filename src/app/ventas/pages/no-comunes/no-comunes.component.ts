import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre:string = 'Susana';
  genero:string = 'femenino';

  invitacionMapa={
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes:string[] = ['Maria', 'Pedro' , 'Juan'];
  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos 2 clientes esperando',
    'other': 'tenemos # clientes esperando'
  }

  cambiarPersona(){
    this.nombre = 'Fernando',
    this.genero = 'masculino'
  }

  borrarCliente(){
    this.clientes.shift();    
  }

  persona = {
    nombre: 'Fernando',
    edad: 35,
    direccion: 'Otawa, Canadá'
  }


  //Async Pipe
  miObservable = interval(1000)

  valorPromesa = new Promise((resolve, reject) =>{
    setTimeout(() =>{
      resolve( 'Tenemos data de promesa' );
    }, 3500);
  });
}
