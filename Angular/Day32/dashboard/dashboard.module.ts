import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { AddemployeeComponent } from '../addemployee/addemployee.component';
import { DeatilsComponent } from '../deatils/deatils.component';
import { FilterPipe } from '../filter.pipe';
import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from '../home/home.component';
import { UpdateempComponent } from '../updateemp/updateemp.component';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { MaterialModule } from '../shared/material.module';


@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    DeatilsComponent,
    AddemployeeComponent,
    UpdateempComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ModalModule.forRoot(),
    NgxPaginationModule,
    MaterialModule,
  ]
})
export class DashboardModule { }
