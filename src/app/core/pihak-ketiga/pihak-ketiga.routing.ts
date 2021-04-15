import { Routes } from '@angular/router';
import { KursusDanProgramComponent } from './kursus-dan-program/kursus-dan-program.component';
import { TuntutanComponent } from './tuntutan/tuntutan.component';
import { PenilaianComponent } from './penilaian/penilaian.component';

export const PihakKetigaRoutes : Routes = [
    {
        path: '',
        children: [
            {
                path: 'kursus-dan-program',
                component: KursusDanProgramComponent
            },
            {
                path: 'tuntutan',
                component: TuntutanComponent
            },
            {
                path: 'penilaian',
                component: PenilaianComponent
            },
        ]
    }
]