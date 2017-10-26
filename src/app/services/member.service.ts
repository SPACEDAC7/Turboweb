import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'
import {Member} from "../models/member";
import {Observable} from "rxjs/Observable";

@Injectable()
export class MemberService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private articleUrl = 'https://www.turbomachos.com/back/v1/api';

  constructor(private http: Http) {
  }

  getAllMembers(): Observable<Member> {
    console.log("getAllMembers");
    const url = `${this.articleUrl}/miembros/miembro`;
    return this.http.get(url)
      .map(response => response.json())
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
