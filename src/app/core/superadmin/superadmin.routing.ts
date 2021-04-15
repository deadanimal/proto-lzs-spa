import { Routes } from '@angular/router';
import { LzsAdminComponent } from './lzs-admin/lzs-admin.component';

export const SuperadminRoute : Routes = [
    {
        path:'',
        children: [
            {
                path: 'lzs-admin',
                component: LzsAdminComponent
            },
        ]
    }
]