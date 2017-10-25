import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Member} from "../models/member";

@Injectable()
export class MemberService {

  private headers = new Headers({'Content-Type': 'application/json'});
  private articleUrl = 'https://www.turbomachos.com/back/v1/api';

  constructor(private http: Http) {
  }

  getMemberTest(search: String): Promise<Member> {
    const url = `${this.articleUrl}/${search}`;
    return this.http.get(url).toPromise().then(response => response.json() as Member)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
