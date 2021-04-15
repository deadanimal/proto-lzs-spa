import { Routes } from '@angular/router';
import { PermohonanComponent } from './permohonan/permohonan.component';

export const PembekalRoutes : Routes = [
    {
        path: '',
        children: [
            {
                path: 'permohonan',
                component: PermohonanComponent
            },
        ]
    }
]