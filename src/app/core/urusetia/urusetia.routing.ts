import { Routes } from '@angular/router';
import { PermohonanComponent } from './permohonan/permohonan.component';
import { PenilaianComponent } from './penilaian/penilaian.component';
import { TuntutanComponent } from './tuntutan/tuntutan.component';

export const UrusetiaRoute : Routes = [
    {
        path:'',
        children: [
            {
                path: 'permohonan',
                component: PermohonanComponent
            },
            {
                path: 'penilaian',
                component: PenilaianComponent
            },
            {
                path: 'tuntutan',
                component: TuntutanComponent
            },
        ]
    }
]