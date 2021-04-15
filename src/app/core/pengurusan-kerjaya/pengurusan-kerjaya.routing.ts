import { Routes } from '@angular/router';
import { SenaraiKerjaKosongComponent } from './senarai-kerja-kosong/senarai-kerja-kosong.component';

export const PengurusanKerjayaRoutes : Routes = [
    {
        path: '',
        children: [
            {
                path: 'senarai-kerja-kosong',
                component: SenaraiKerjaKosongComponent
            },
        ]
    }
]