import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MembersComponent } from './pages/members/members.component';
import {AppComponent} from "./app.component";


const routes: Routes = [
  { path: '', redirectTo: '/home',pathMatch: 'full' },
  { path: 'home', component: MembersComponent },
  { path: 'members', component: MembersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
