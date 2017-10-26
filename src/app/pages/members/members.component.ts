import {AfterViewInit, Component, OnInit} from '@angular/core';
import {Member} from "../../models/member";
import {MemberService} from "../../services/member.service";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.sass']
})
export class MembersComponent implements OnInit, AfterViewInit {
  title = 'Página de miembros';
  miembros: Member;

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

}
