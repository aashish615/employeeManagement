import { SecureService } from './../../_service/secure.service';
// Angular
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
// RxJS
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
// NGRX
import { select, Store } from '@ngrx/store';
// Auth reducers and selectors
import { AppState} from '../../../core/reducers/';
import { isLoggedIn } from '../_selectors/auth.selectors';

@Injectable()
export class AuthGuard implements CanActivate {
	constructor(private store: Store<AppState>, private router: Router,
		private secureService:SecureService) { }
	canActivate(
		next: ActivatedRouteSnapshot, state: RouterStateSnapshot
	  ) {
		let user: any = this.secureService.getSecureData('user') && JSON.parse(this.secureService.getSecureData('user'));
		if (user) {
		  this.router.navigate(['/dashboard']);
		  return false;
 		}   else {
			this.router.navigate(['/auth/login']);
			return false;
 		}
	  }
}
