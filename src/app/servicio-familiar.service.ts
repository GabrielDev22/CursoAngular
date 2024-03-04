import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ServicioFamiliarService {

  hermanaMayor?: string;
  hermanoPequeno?: string;

  getHermanoGrande(): string{
    return this.hermanaMayor || '';
  }

  setHermanoGrande(hermano: string){
    this.hermanaMayor = hermano;
  }

  getHermanoPequeno(): string{
    return this.hermanoPequeno || '';
  }

  setHermanoPequeno(hermano : string) {
    this.hermanoPequeno = hermano;
  }


  saludar(hermano : string){
    console.log(`Hola ${hermano}`);
  }

  preguntarPorHijo():string{
    return '¿Como esta tu hijo?'
  }

  constructor() { }
}
