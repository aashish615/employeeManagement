import { AuthNoticeService } from './../../../../core/auth/auth-notice/auth-notice.service';
import { AuthenticationService } from './../auth.service';
 import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
 // declare let $: any;

@Component({
  selector: 'kt-otp-verify',
  templateUrl: './otp-verify.component.html',
  styleUrls: ['./otp-verify.component.scss']
})
export class OtpVerifyComponent implements OnInit {
	$email:any;
	loading = false;
	code:any={};
  constructor(
	  private route:ActivatedRoute,
	  private authService:AuthenticationService,
	  private authNoticeService: AuthNoticeService,
	  private router:Router
	  ) {

		this.route.params.forEach((params) => {
			this.$email = params['id'];
			console.log("this.$$email",this.$email);

		});
	  }

  ngOnInit() {





  }
  submit(){
	  console.log("this.modale",this.code);
	  this.loading=true;
	  let otpcode = this.code.one+""+this.code.two+""+this.code.three+""+this.code.four+""+this.code.five;
 	 	console.log("otpcode",otpcode);

		  this.authService.otpVerify(this.$email,otpcode).subscribe((res:any)=>{
			this.authNoticeService.setNotice("Done", 'success');
			 this.loading = false;
			 this.router.navigate(['/auth/login'])
		},rej=>{
			console.log("Rej",rej);

			this.authNoticeService.setNotice(rej.error.message, 'danger');
			this.loading = false;
		});

	}

	resendOtp(){
		this.authService.resendOtp(this.$email).subscribe((res:any)=>{
			this.authNoticeService.setNotice(res.message, 'success');
 			this.loading = false;
		},rej=>{
			this.authNoticeService.setNotice(rej.error.message, 'danger');
			this.loading = false;
		})
	}

}
