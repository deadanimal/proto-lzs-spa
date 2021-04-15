import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth/auth.service';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { NotifyService } from 'src/app/shared/handler/notify/notify.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // Image
  imgLogo = 'assets/img/logo/lzs-logo.png'

  // Form
  focusUsername
  focusPassword
  loginForm: FormGroup
  loginFormMessages = {
    'username': [
      { type: 'required', message: 'Email is required' },
      { type: 'email', message: 'Please enter a valid email'}
    ],
    'password': [
      { type: 'required', message: 'Password is required' },
      { type: 'minLength', message: 'Password must have at least 8 characters' }
    ]
  }

  constructor(
    private authService: AuthService,
    private notifyService: NotifyService,
    private formBuilder: FormBuilder,
    private loadingBar: LoadingBarService,
    private router: Router
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: new FormControl('', Validators.compose([
        Validators.required,
        Validators.email
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(8)
      ]))
    })
  }

  login() {
    this.loadingBar.start()
    this.loadingBar.complete()
    this.successMessage()
    if (this.loginForm.value.username == 'admin') {
      this.authService.userRole = 1
      localStorage.setItem("userRole", "1");
      this.navigatePage('dashboard-admin')
    }
    else if (this.loginForm.value.username == 'user') {
      this.authService.userRole = 2
      localStorage.setItem("userRole", "2");
      this.navigatePage('dashboard-user')
    }
    else if (this.loginForm.value.username == 'asnaf') {
      this.authService.userRole = 3
      localStorage.setItem("userRole", "3");
      this.navigatePage('kelas-fadhu-ain-asnaf')
    }
    else if (this.loginForm.value.username == 'gpam') {
      this.authService.userRole = 4
      localStorage.setItem("userRole", "4");
      this.navigatePage('permohonan-gpam')
    }
    else if (this.loginForm.value.username == 'pembekal') {
      this.authService.userRole = 5
      localStorage.setItem("userRole", "5");
      this.navigatePage('permohonan-pembekal')
    }
    else if (this.loginForm.value.username == 'pengurusankerjaya') {
      this.authService.userRole = 6
      localStorage.setItem("userRole", "6");
      this.navigatePage('senarai-kerja-kosong-pengurusan-kerjaya')
    }
    else if (this.loginForm.value.username == 'pihakketiga') {
      this.authService.userRole = 7
      localStorage.setItem("userRole", "7");
      this.navigatePage('kursus-dan-program-pihak-ketiga')
    }
    else if (this.loginForm.value.username == 'superadmin') {
      this.authService.userRole = 8
      localStorage.setItem("userRole", "8");
      this.navigatePage('lzs-admin-superadmin')
    }
    else if (this.loginForm.value.username == 'urusetia') {
      this.authService.userRole = 9
      localStorage.setItem("userRole", "9");
      this.navigatePage('permohonan-urusetia')
    }
    else if (this.loginForm.value.username == 'dpajpie') {
      this.authService.userRole = 10
      localStorage.setItem("userRole", "10");
      this.navigatePage('dashboard-dpajpie')
    }
  }

  navigatePage(path: String) {
    if (path == 'login') {
      return this.router.navigate(['/auth/login'])
    }
    else  if (path == 'forgot') {
      return this.router.navigate(['/auth/forgot'])
    }
    else  if (path == 'register') {
      return this.router.navigate(['/auth/register'])
    }
    else if (path == 'dashboard-admin') {
      return this.router.navigate(['/admin/dashboard'])
    }
    else if (path == 'dashboard-user') {
      return this.router.navigate(['/user/dashboard'])
    }
    else if (path == 'kelas-fadhu-ain-asnaf') {
      return this.router.navigate(['/asnaf/kelas-fardhu-ain'])
    }
    else if (path == 'permohonan-gpam') {
      return this.router.navigate(['/gpam/permohonan'])
    }
    else if (path == 'permohonan-pembekal') {
      return this.router.navigate(['/pembekal/permohonan'])
    }
    else if (path == 'senarai-kerja-kosong-pengurusan-kerjaya') {
      return this.router.navigate(['/pengurusan-kerjaya/senarai-kerja-kosong'])
    }
    else if (path == 'kursus-dan-program-pihak-ketiga') {
      return this.router.navigate(['/pihak-ketiga/kursus-dan-program'])
    }
    else if (path == 'lzs-admin-superadmin') {
      return this.router.navigate(['/superadmin/lzs-admin'])
    }
    else if (path == 'permohonan-urusetia') {
      return this.router.navigate(['/urusetia/permohonan'])
    }
    else if (path == 'dashboard-dpajpie') {
      return this.router.navigate(['/dpajpie/dashboard'])
    }
  }

  successMessage() {
    let title = 'Success'
    let message = 'Logging in right now'
    this.notifyService.openToastr(title, message)
  }

}
