import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ROUTES, ROUTESUSER, ROUTESASNAF, ROUTESGPAM, ROUTESPEMBEKAL, ROUTESPENGURUSANKERJAYA, ROUTESPIHAKKETIGA, ROUTESSUPERADMIN, ROUTESURUSETIA, ROUTESDPAJIE } from '../../shared/menu/menu-items';
import { AuthService } from 'src/app/shared/services/auth/auth.service';

var misc: any = {
  sidebar_mini_active: true
};

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {

  public menuItems: any[];
  public isCollapsed = true;
  public menu;

  // Image
  imgLogo = 'assets/img/logo/lzs-logo.png'

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    var userRole = localStorage.getItem("userRole");
    if (userRole == '1') {
      this.menu = ROUTES
    }
    else if (userRole == '2') {
      this.menu = ROUTESUSER
    }
    else if (userRole == '3') {
      this.menu = ROUTESASNAF
    }
    else if (userRole == '4') {
      this.menu = ROUTESGPAM
    }
    else if (userRole == '5') {
      this.menu = ROUTESPEMBEKAL
    }
    else if (userRole == '6') {
      this.menu = ROUTESPENGURUSANKERJAYA
    }
    else if (userRole == '7') {
      this.menu = ROUTESPIHAKKETIGA
    }
    else if (userRole == '8') {
      this.menu = ROUTESSUPERADMIN
    }
    else if (userRole == '9') {
      this.menu = ROUTESURUSETIA
    }
    else if (userRole == '10') {
      this.menu = ROUTESDPAJIE
    }
    this.menuItems = this.menu.filter(menuItem => menuItem);
    this.router.events.subscribe(event => {
      this.isCollapsed = true;
    });
  }

  onMouseEnterSidenav() {
    if (!document.body.classList.contains("g-sidenav-pinned")) {
      document.body.classList.add("g-sidenav-show");
    }
  }

  onMouseLeaveSidenav() {
    if (!document.body.classList.contains("g-sidenav-pinned")) {
      document.body.classList.remove("g-sidenav-show");
    }
  }
  
  minimizeSidebar() {
    const sidenavToggler = document.getElementsByClassName(
      "sidenav-toggler"
    )[0];
    const body = document.getElementsByTagName("body")[0];
    if (body.classList.contains("g-sidenav-pinned")) {
      misc.sidebar_mini_active = true;
    } else {
      misc.sidebar_mini_active = false;
    }
    if (misc.sidebar_mini_active === true) {
      body.classList.remove("g-sidenav-pinned");
      body.classList.add("g-sidenav-hidden");
      sidenavToggler.classList.remove("active");
      misc.sidebar_mini_active = false;
    } else {
      body.classList.add("g-sidenav-pinned");
      body.classList.remove("g-sidenav-hidden");
      sidenavToggler.classList.add("active");
      misc.sidebar_mini_active = true;
    }
  }
}
