export interface RouteInfo {
    path: string;
    title: string;
    type: string;
    icontype: string;
    collapse?: string;
    isCollapsed?: boolean;
    isCollapsing?: any;
    children?: ChildrenItems[];
}

export interface ChildrenItems {
    path: string;
    title: string;
    type?: string;
    collapse?: string;
    children?: ChildrenItems2[];
    isCollapsed?: boolean;
}
export interface ChildrenItems2 {
    path?: string;
    title?: string;
    type?: string;
}

// Menu Items
export const ROUTES: RouteInfo[] = [
  {
    path: '/admin/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'fas fa-home text-purple'
  },
  {
    path: '/admin/management',
    title: 'Management',
    type: 'sub',
    icontype: 'fas fa-file-invoice text-pink',
    collapse: 'management',
    isCollapsed: true,
    children: [
      { path: 'audit-trails', title: 'Audit Trails', type: 'link' },
      { path: 'user', title: 'User', type: 'link' }
    ]
  },
  {
    path: '/admin/report',
    title: 'Reporting',
    type: 'link',
    icontype: 'fas fa-chart-bar text-red'
  },
  /*
  {
    path: '/helpdesk',
    title: 'Helpdesk',
    type: 'link',
    icontype: 'fas fa-life-ring text-blue'
  },
  {
    path: '/audit',
    title: 'Audit Trail',
    type: 'link',
    icontype: 'fas fa-braille text-indigo'
  }
  */
];

export const ROUTESUSER: RouteInfo[] = [
  {
    path: '/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'fas fa-desktop text-warning'
  },
  {
    path: '/applications',
    title: 'Applications',
    type: 'link',
    icontype: 'fas fa-file-invoice text-pink'
  },
  {
    path: '/houses',
    title: 'Houses',
    type: 'link',
    icontype: 'fas fa-home text-purple'
  },
  {
    path: '/management',
    title: 'Management',
    type: 'link',
    icontype: 'fas fa-tasks text-red'
  },
  {
    path: '/report',
    title: 'Report',
    type: 'link',
    icontype: 'fas fa-chart-bar text-green'
  },
  {
    path: '/helpdesk',
    title: 'Helpdesk',
    type: 'link',
    icontype: 'fas fa-life-ring text-blue'
  },
  {
    path: '/audit',
    title: 'Audit Trail',
    type: 'link',
    icontype: 'fas fa-braille text-indigo'
  }/*,
  {
    path: '/maintenance',
    title: 'Maintenance',
    type: 'link',
    icontype: 'fas fa-cogs text-orange'
  }*/
  /*{
    path: '/settings',
    title: 'Settings',
    type: 'link',
    icontype: 'fas fa-sliders-h text-blue'
  }*/
];

export const ROUTESASNAF: RouteInfo[] = [
  {
    path: '/asnaf/kelas-fardhu-ain',
    title: 'Kelas Fardhu Ain',
    type: 'link',
    icontype: 'fas fa-table text-dark'
  },
  {
    path: '/asnaf/kursus-dan-program',
    title: 'Kelas, Kursus Dan Program',
    type: 'sub',
    icontype: 'fas fa-book-open text-dark',
    collapse: 'management',
    isCollapsed: true,
    children: [
      { path: 'kursusprogram-dari-dpa', title: 'Daripada DPA', type: 'link' },
      { path: 'kursusprogram-dari-ketiga', title: 'Daripada Pihak Ketiga', type: 'link' }
    ]
  },
  {
    path: '/asnaf/pengurusan-kerjaya',
    title: 'Pengurusan Kerjaya',
    type: 'link',
    icontype: 'fas fa-user-check text-dark'
  },
  {
    path: '/asnaf/tuntutan',
    title: 'Tuntutan',
    type: 'link',
    icontype: 'fas fa-handshake text-dark'
  },
  {
    path: '/asnaf/daftar-kelas',
    title: 'Daftar Kelas',
    type: 'link',
    icontype: 'fas fa-book-reader text-dark'
  },
  {
    path: '/asnaf/ujian',
    title: 'Ujian',
    type: 'link',
    icontype: 'fas fa-chart-bar text-dark'
  },
  {
    path: '/asnaf/penilaian',
    title: 'Penilaian',
    type: 'link',
    icontype: 'fas fa-edit text-dark'
  },
]

export const ROUTESGPAM: RouteInfo[] = [
  {
    path: '/gpam/permohonan',
    title: 'Permohonan',
    type: 'link',
    icontype: 'fas fa-file-signature text-dark'
  },
  {
    path: '/gpam/kelas-fardhu-ain',
    title: 'Kelas Fardhu Ain',
    type: 'link',
    icontype: 'fas fa-table text-dark'
  },
  {
    path: '/gpam/kursus-dan-program',
    title: 'Kelas, Kursus dan Program',
    type: 'link',
    icontype: 'fas fa-book-open text-dark'
  },
  {
    path: '/gpam/daftar-kelas',
    title: 'Daftar Kelas',
    type: 'link',
    icontype: 'fas fa-book-reader text-dark'
  },
  {
    path: '/gpam/ujian',
    title: 'Ujian',
    type: 'link',
    icontype: 'fas fa-chart-bar text-dark'
  },
  {
    path: '/gpam/penilaian',
    title: 'Penilaian',
    type: 'link',
    icontype: 'fas fa-edit text-dark'
  },
  {
    path: '/gpam/tuntutan',
    title: 'Tuntutan',
    type: 'link',
    icontype: 'fas fa-handshake text-dark'
  },
]

export const ROUTESPEMBEKAL: RouteInfo[] = [
  {
    path: '/pembekal/permohonan',
    title: 'Permohonan',
    type: 'link',
    icontype: 'fas fa-file-signature text-dark'
  },
]

export const ROUTESPENGURUSANKERJAYA: RouteInfo[] = [
  {
    path: '/pengurusan-kerjaya/senarai-kerja-kosong',
    title: 'Senarai Kerja Kosong',
    type: 'link',
    icontype: 'fas fa-chart-bar text-dark'
  },
]

export const ROUTESPIHAKKETIGA: RouteInfo[] = [
  {
    path: '/pihak-ketiga/kursus-dan-program',
    title: 'Kelas, Kursus dan Program',
    type: 'link',
    icontype: 'fas fa-book-open text-dark'
  },
  {
    path: '/pihak-ketiga/penilaian',
    title: 'Penilaian',
    type: 'link',
    icontype: 'fas fa-edit text-dark'
  },
  {
    path: '/pihak-ketiga/tuntutan',
    title: 'Tuntutan',
    type: 'link',
    icontype: 'fas fa-handshake text-dark'
  },
]

export const ROUTESSUPERADMIN: RouteInfo[] = [
  {
    path: '/superadmin/lzs-admin',
    title: 'LZS Admin',
    type: 'link',
    icontype: 'fas fa-chart-bar text-dark'
  },
]

export const ROUTESURUSETIA: RouteInfo[] = [
  {
    path: '/urusetia/permohonan',
    title: 'Permohonan',
    type: 'link',
    icontype: 'fas fa-file-signature text-dark'
  },
  {
    path: '/urusetia/penilaian',
    title: 'Penilaian',
    type: 'link',
    icontype: 'fas fa-edit text-dark'
  },
  {
    path: '/urusetia/tuntutan',
    title: 'Tuntutan',
    type: 'link',
    icontype: 'fas fa-handshake text-dark'
  },
]

export const ROUTESDPAJIE: RouteInfo[] = [
  {
    path: '/dpajpie/dashboard',
    title: 'Dashboard',
    type: 'link',
    icontype: 'fas fa-home text-dark'
  },
  {
    path: '/dpajpie/permohonan',
    title: 'Permohonan',
    type: 'link',
    icontype: 'fas fa-file-signature text-dark'
  },
  {
    path: '/dpajpie/kelas-fardhu-ain',
    title: 'Kelas Fardhu Ain',
    type: 'link',
    icontype: 'fas fa-table text-dark'
  },
  {
    path: '/dpajpie/kursus-program-dpa',
    title: 'Kursus & Program Daripada DPA',
    type: 'link',
    icontype: 'fas fa-book-open text-dark'
  },
  {
    path: '/dpajpie/kursus-program-pihak-ketiga',
    title: 'Kursus & Program Daripada Pihak Ketiga',
    type: 'link',
    icontype: 'fas fa-book-reader text-dark'
  },
  {
    path: '/dpajpie/pembekal',
    title: 'Pembekal',
    type: 'link',
    icontype: 'fas fa-luggage-cart text-dark'
  },
  {
    path: '/dpajpie/pengurusan-kerjaya',
    title: 'Pengurusan Kerjaya',
    type: 'link',
    icontype: 'fas fa-user-check text-dark'
  },
  {
    path: '/dpajpie/penilaian',
    title: 'Penilaian',
    type: 'link',
    icontype: 'fas fa-edit text-dark'
  },
  {
    path: '/dpajpie/tuntutan',
    title: 'Tuntutan',
    type: 'link',
    icontype: 'fas fa-handshake text-dark'
  },
]