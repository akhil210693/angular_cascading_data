import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TcComponent } from './tc/tc.component';

const routes: Routes = [{path:'tc', component:TcComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
