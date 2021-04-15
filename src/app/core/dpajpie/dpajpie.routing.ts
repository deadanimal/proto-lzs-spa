import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { KelasFardhuAinComponent } from './kelas-fardhu-ain/kelas-fardhu-ain.component';
import { KpDpaComponent } from './kp-dpa/kp-dpa.component';
import { KpPihakKetigaComponent } from './kp-pihak-ketiga/kp-pihak-ketiga.component';
import { PembekalComponent } from './pembekal/pembekal.component';
import { PengurusanKerjayaComponent } from './pengurusan-kerjaya/pengurusan-kerjaya.component';
import { PenilaianComponent } from './penilaian/penilaian.component';
import { TuntutanComponent } from './tuntutan/tuntutan.component';
import { PermohonanGpamComponent } from './permohonan-gpam/permohonan-gpam.component';

export const DpajpieRoutes : Routes = [
    {
        path: '',
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'permohonan',
                component: PermohonanGpamComponent
            },
            {
                path: 'kelas-fardhu-ain',
                component: KelasFardhuAinComponent
            },
            {
                path: 'kursus-program-dpa',
                component: KpDpaComponent
            },
            {
                path: 'kursus-program-pihak-ketiga',
                component: KpPihakKetigaComponent
            },
            {
                path: 'pembekal',
                component: PembekalComponent
            },
            {
                path: 'pengurusan-kerjaya',
                component: PengurusanKerjayaComponent
            },
            {
                path: 'penilaian',
                component: PenilaianComponent
            },
            {
                path: 'tuntutan',
                component: TuntutanComponent
            }
        ]
    }
]