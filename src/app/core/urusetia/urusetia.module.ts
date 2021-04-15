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
import { UrusetiaRoute } from "./urusetia.routing";
import { PermohonanComponent } from './permohonan/permohonan.component';
import { PenilaianComponent } from './penilaian/penilaian.component';
import { TuntutanComponent } from './tuntutan/tuntutan.component';



@NgModule({
  declarations: [PermohonanComponent, PenilaianComponent, TuntutanComponent],
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
    RouterModule.forChild(UrusetiaRoute)
  ],
})
export class UrusetiaModule { }
