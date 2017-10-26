import {AfterViewInit, Component} from '@angular/core';
import {Member} from "./models/member";
import {MemberService} from "./services/member.service";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [MemberService]
})
export class AppComponent implements AfterViewInit{
  title = 'Lista de páginas';
  miembros: Member;

  constructor(private titleService: Title){
    this.titleService.setTitle(this.title);
  }

  ngAfterViewInit(){
  }

}
