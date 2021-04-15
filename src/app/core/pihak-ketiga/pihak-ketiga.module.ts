import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  AccordionModule,
  BsDropdownModule,
  ModalModule,
  ProgressbarModule, 
  TabsModule,
  TooltipModule
} from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { LoadingBarModule } from '@ngx-loading-bar/core';

import { RouterModule } from "@angular/router";
import { PihakKetigaRoutes } from "./pihak-ketiga.routing";

import { KursusDanProgramComponent } from './kursus-dan-program/kursus-dan-program.component';
import { TuntutanComponent } from './tuntutan/tuntutan.component';
import { PenilaianComponent } from './penilaian/penilaian.component';



@NgModule({
  declarations: [KursusDanProgramComponent, TuntutanComponent, PenilaianComponent],
  imports: [
    CommonModule,
    AccordionModule.forRoot(),
    BsDatepickerModule.forRoot(),
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    ProgressbarModule.forRoot(),
    TabsModule.forRoot(),
    TooltipModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    LoadingBarModule,
    NgxDatatableModule,
    RouterModule.forChild(PihakKetigaRoutes)
  ],
})
export class PihakKetigaModule { }
