import { environment } from './../../../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

	constructor(private http: HttpClient) { }

	login = (d) => this.http.post(`${environment.api_url}api/erm/user/login`, d);
	register = (d) => this.http.post(`${environment.api_url}api/erm/user/signup`, d);
	otpVerify = (email,token) => this.http.get(`${environment.api_url}api/erm/user/verify/signup?email=${email}&verificationToken=${token}`);
	resendOtp = (email) => this.http.get(`${environment.api_url}api/erm/user/resend/signup/verificationToken?email=${email}`);


 	// forgotPassword = (d) => this.http.post(`${environment.api_url}/forgot/password`, d);

	// login = (d) => this.http.post(`${environment.api_url}/login`, d);



	// socialLogin = (d) => this.http.post(`${environment.api_url}/social_login`, d);

	// updatePhone = (d) => this.http.put(`${environment.api_url}/user/phone/edit`, d);

	// loginInvite = (id) => this.http.get(`${environment.api_url}/invite/view/${id}`);
}
