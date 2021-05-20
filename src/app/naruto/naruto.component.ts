import { Component  } from '@angular/core';

@Component({
  selector: 'app-naruto',
  templateUrl: './naruto.component.html',
  styleUrls: ['./naruto.component.css']
})
export class NarutoComponent {

 public nombre:string = "naruto";
 public edad: number = 20;
 
 get nombreMayusculas(){
   return this.nombre.toLocaleLowerCase();

 }

 public informacionPersonaje():string{
   return `El nombre es ${this.nombre} t la edad es ${this.edad}`;
   

 }
 public cambiarPersonaje(): void{
   this.nombre = "Sasuke";
 }
}
