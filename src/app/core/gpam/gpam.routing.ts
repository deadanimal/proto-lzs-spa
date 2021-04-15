import { Routes } from "@angular/router";
import { PermohonanComponent } from "./permohonan/permohonan.component";
import { KelasFardhuAinComponent } from "./kelas-fardhu-ain/kelas-fardhu-ain.component";
import { KursusDanProgramComponent } from "./kursus-dan-program/kursus-dan-program.component";
import { DaftarKelasComponent } from "./daftar-kelas/daftar-kelas.component";
import { UjianComponent } from "./ujian/ujian.component";
import { PenilaianComponent } from "./penilaian/penilaian.component";
import { TuntutanComponent } from "./tuntutan/tuntutan.component";

export const GpamRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "permohonan",
        component: PermohonanComponent,
      },
      {
        path: "kelas-fardhu-ain",
        component: KelasFardhuAinComponent,
      },
      {
        path: "kursus-dan-program",
        component: KursusDanProgramComponent,
      },
      {
        path: "daftar-kelas",
        component: DaftarKelasComponent,
      },
      {
        path: "ujian",
        component: UjianComponent,
      },
      {
        path: "penilaian",
        component: PenilaianComponent,
      },
      {
        path: "tuntutan",
        component: TuntutanComponent,
      },
    ],
  },
];
