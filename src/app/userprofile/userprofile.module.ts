import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';


import { UserprofileRoutingModule } from './userprofile-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    UserprofileRoutingModule
  ]
})
export class UserprofileModule { }
