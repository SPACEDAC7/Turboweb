import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch'
import {Member} from "../models/member";
import {Observable} from "rxjs/Observable";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError} from "rxjs/operators";

@Injectable()
export class MemberService {

  public headers = new HttpHeaders().set('Authorization', 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VybmFtZSI6InBha2F0YW5nYSIsImlkX3VzdWFyaW8iOjUsImVtYWlsIjoicG11c0B0dXJib21hY2hvcy5jb20iLCJyb2xlcyI6W3siaWRfcm9sIjoxfSx7ImlkX3JvbCI6M31dLCJmX2NyZWFjaW9uIjoxNTE4MTIyMzEzLCJmX2V4cGlyYWNpb24iOjE1MTkzMzE5MTN9.JbBWMRS3uHLbk-Yep2skAoKDfNZx8TThtP4d_55k2lo');
  private articleUrl = 'https://www.turbomachos.com/back/v1/api';

  constructor(private http: HttpClient) {
  }

  getAllMembers(): Observable<any> {
    console.log("getAllMembers");
    const url = `${this.articleUrl}/miembros/miembro`;
    return this.http.get(url, {headers: this.headers});
  }

  addMember(member: Member): Observable<any>{
    // let json = JSON.stringify(member);
    const url = `${this.articleUrl}/miembros/miembro`;
    //
    // console.log('JSON');
    // console.log(json);

    return this.http.post<Member>(url, member, {headers: this.headers});
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
