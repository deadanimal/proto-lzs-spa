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
import { DpajpieRoutes } from "./dpajpie.routing";

import { DashboardComponent } from './dashboard/dashboard.component';
import { KelasFardhuAinComponent } from './kelas-fardhu-ain/kelas-fardhu-ain.component';
import { KpDpaComponent } from './kp-dpa/kp-dpa.component';
import { KpPihakKetigaComponent } from './kp-pihak-ketiga/kp-pihak-ketiga.component';
import { PembekalComponent } from './pembekal/pembekal.component';
import { PengurusanKerjayaComponent } from './pengurusan-kerjaya/pengurusan-kerjaya.component';
import { PenilaianComponent } from './penilaian/penilaian.component';
import { TuntutanComponent } from './tuntutan/tuntutan.component';
import { PermohonanGpamComponent } from './permohonan-gpam/permohonan-gpam.component';


@NgModule({
  declarations: [DashboardComponent, KelasFardhuAinComponent, KpDpaComponent, KpPihakKetigaComponent, PembekalComponent, PengurusanKerjayaComponent, PenilaianComponent, TuntutanComponent, PermohonanGpamComponent],
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
    RouterModule.forChild(DpajpieRoutes)
  ],
})
export class DpajpieModule { }
