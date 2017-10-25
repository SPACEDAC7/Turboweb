import { Component } from '@angular/core';
import {Member} from "./models/member";
import {MemberService} from "./services/member.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [MemberService]
})
export class AppComponent {
  title = 'Página de miembros';
  prueba: Member;

  constructor(private memberService:MemberService){
    this.memberService = memberService;
  }

  ngAfterViewInit(){
    this.leerDatos();
  }

  // las llamadas devuelven observables
  leerDatos(){
    // Se declara cómo va a ser la llamada
    // ocultando los pormenores a los consumidores
    // En este momento aún no se efectuó la llamada
    this.memberService.getMemberTest("miembros/miembro").then(res => {
      console.log("Hola");
      this.prueba = res;
    });
  }
}
