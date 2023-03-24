import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from 'src/app/shared/Services/services.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

   SignupForm: any;
   hasError: boolean = true
   userdetails: any;

  constructor(private router: Router, private services: ServicesService) {
    this.SignupForm = new FormGroup({

      Name: new FormControl("", [Validators.required]),
      Email: new FormControl("", [Validators.required, Validators.pattern("[^ @]*@[^ @]*"),]),
      PhNumber: new FormControl("", [Validators.required]),
      Password: new FormControl("", [Validators.required]),

    })
  }
  ngOnInit(): void { }

  signup() {
    console.log("newuser");
    if (this.SignupForm.valid) {
      let userdetails = {
        name: this.SignupForm.value.Name,
        email: this.SignupForm.value.Email,
        phNumber: this.SignupForm.value.PhNumber,
        password: this.SignupForm.value.Password,
      };
      this.services.UserSingup(userdetails).subscribe((resp: { status: number; }) => {

        console.log(resp);
        if (resp.status == 200) {
          console.log("Registered Successfully");
          this.SignupForm.reset();
          Swal.fire({
            icon: "success",
            text: "User Successfully Registered",
          });
          this.router.navigateByUrl("/login");
        } else {
          console.log("error");
          Swal.fire({
            icon: "error",
            text: 'Please Enter Values',
          });
        }

      });

    }else {
      this.hasError= true;
      console.log("Error");
    }

  }

}
