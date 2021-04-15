import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { GpamRoutes } from "./gpam.routing";

import { PermohonanComponent } from "./permohonan/permohonan.component";
import { KelasFardhuAinComponent } from "./kelas-fardhu-ain/kelas-fardhu-ain.component";
import { KursusDanProgramComponent } from "./kursus-dan-program/kursus-dan-program.component";
import { DaftarKelasComponent } from "./daftar-kelas/daftar-kelas.component";
import { UjianComponent } from "./ujian/ujian.component";
import { PenilaianComponent } from "./penilaian/penilaian.component";
import { TuntutanComponent } from "./tuntutan/tuntutan.component";

@NgModule({
  declarations: [
    PermohonanComponent,
    KelasFardhuAinComponent,
    KursusDanProgramComponent,
    DaftarKelasComponent,
    UjianComponent,
    PenilaianComponent,
    TuntutanComponent,
  ],
  imports: [
    CommonModule, 
    RouterModule.forChild(GpamRoutes)
  ],
})
export class GpamModule {}
