import { Component, OnInit } from "@angular/core";
import swal from "sweetalert2";
import { Router } from "@angular/router";

@Component({
  selector: "app-ujian-soalan",
  templateUrl: "./ujian-soalan.component.html",
  styleUrls: ["./ujian-soalan.component.scss"],
})
export class UjianSoalanComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  confirm() {
    swal
      .fire({
        title: "Confirmation",
        text: "Are you sure to apply for this exam?",
        type: "info",
        buttonsStyling: false,
        confirmButtonClass: "btn btn-info",
        confirmButtonText: "Confirm",
        showCancelButton: true,
        cancelButtonClass: "btn btn-danger",
        cancelButtonText: "Cancel",
      })
      .then((result) => {
        if (result.value) {
          this.register();
        }
      });
  }

  register() {
    swal
      .fire({
        title: "Success",
        text: "You have been admitted to this exam!",
        type: "success",
        buttonsStyling: false,
        confirmButtonClass: "btn btn-success",
        confirmButtonText: "Close",
      })
      .then((result) => {
        this.router.navigate(["/asnaf/ujian"]);
      });
  }
}
