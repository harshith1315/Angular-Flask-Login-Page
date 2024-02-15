import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogintestcomponentComponent } from './logintestcomponent/logintestcomponent.component';
import { SucesscomponentComponent } from './sucesscomponent/sucesscomponent.component';

const routes: Routes = [
  { path: '', component: LogintestcomponentComponent },
  {path:'sucess',component:SucesscomponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
