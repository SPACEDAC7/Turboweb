import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Member} from "../../models/member";
import {MemberService} from "../../services/member.service";
import {Title} from "@angular/platform-browser";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.sass']
})
export class MembersComponent implements OnInit, AfterViewInit {
  title = 'Página de miembros';
  miembros: Member;
  miembro = new Member();

  constructor(private memberService: MemberService, private titleService: Title) {
    console.log("MembersComponent:contructor");
  }

  ngOnInit() {
    this.titleService.setTitle(this.title);
    console.log("MembersComponent:OnInit");
  }

  ngAfterViewInit(){
    this.memberService.getAllMembers().subscribe(res => {
      console.log("Hola");
      console.log(res);
      this.miembros = res;
    });
  }

  Register(regForm:NgForm){
    console.log(regForm.controls);
    let miembro: Member = new Member();
    miembro.nombre = regForm.controls['nombre'].value;
    console.log("Nombre - " + miembro.nombre);
    miembro.biografia = regForm.controls['biografia'].value;
    console.log("Biografia - " + miembro.biografia);

    this.memberService.addMember(miembro).subscribe();

  }

}
