import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';

import { ListComponent } from './list/list.component';
import { List2Component } from './list2/list2.component';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';


const routes: Routes = [{path:'',component:SigninComponent },
 {path:'list',component:ListComponent}, 
 {path:'list2',component:List2Component},
{path:'add', component:AddComponent},
{path:'delete',component:DeleteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
