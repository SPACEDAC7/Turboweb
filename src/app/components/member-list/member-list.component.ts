import { Component, OnInit } from '@angular/core';
import {MemberService} from "../../services/member.service";
import {Member} from "../../models/member"

@Component({
  selector: 'member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.sass']
})
export class MemberListComponent implements OnInit {
  members:Member;
  errorMsg: string;

  constructor(private _memberService: MemberService) { }

  ngOnInit() {
    this.getAllMembers();
  }

  getAllMembers(){
    this._memberService.getAllMembers()
      .subscribe(
        response => this.members = response,
        error => this.errorMsg = error
      )
  }

}
