import { Routes } from '@angular/router';
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
import { path } from '@amcharts/amcharts4/core';
import { Component } from '@fullcalendar/core';

export const AsnafRoutes : Routes = [
    {
        path: '',
        children: [
            {
                path: 'kelas-fardhu-ain',
                component: KelasFardhuAinComponent
            },
            {
                path: 'kursus-dan-program',
                children: [
                    {
                        path: 'kursusprogram-dari-dpa',
                        component: KursusprogramDariDpaComponent
                    },
                    {
                        path: 'kursusprogram-dari-ketiga',
                        component: KursusprogramDariKetigaComponent
                    },
                ]
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
            },
            {
                path: 'daftar-kelas',
                component: DaftarKelasComponent
            },
            {
                path: 'ujian',
                component: UjianComponent
            },
            {
                path: 'ujian-soalan',
                component: UjianSoalanComponent
            },
        ]
    }
]