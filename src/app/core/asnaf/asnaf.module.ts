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
import { AsnafRoutes } from "./asnaf.routing";

import { KelasFardhuAinComponent } from './kelas-fardhu-ain/kelas-fardhu-ain.component';
import { KursusDanProgramComponent } from './kursus-dan-program/kursus-dan-program.component';
import { KursusprogramDariKetigaComponent } from './kursusprogram-dari-ketiga/kursusprogram-dari-ketiga.component';
import { KursusprogramDariDpaComponent } from './kursusprogram-dari-dpa/kursusprogram-dari-dpa.component';
import { PengurusanKerjayaComponent } from './pengurusan-kerjaya/pengurusan-kerjaya.component';
import { PenilaianComponent } from './penilaian/penilaian.component';
import { TuntutanComponent } from './tuntutan/tuntutan.component';
import { DaftarKelasComponent } from './daftar-kelas/daftar-kelas.component';
import { UjianComponent } from './ujian/ujian.component';
import { UjianSoalanComponent } from './ujian-soalan/ujian-soalan.component';



@NgModule({
  declarations: [KelasFardhuAinComponent, KursusDanProgramComponent, KursusprogramDariKetigaComponent, KursusprogramDariDpaComponent, PengurusanKerjayaComponent, PenilaianComponent, TuntutanComponent, DaftarKelasComponent, UjianComponent, UjianSoalanComponent],
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
    RouterModule.forChild(AsnafRoutes)
  ],
})
export class AsnafModule { }
