import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SecureService {
	constructor(@Inject(PLATFORM_ID) private platform: any) {
	}


	setSecureData(key, value) {
	  if (isPlatformBrowser(this.platform)) {
		localStorage.setItem(key, value);
	  }
	}

	getSecureData(key) {
	  if (isPlatformBrowser(this.platform)) {
		return localStorage.getItem(key);
	  }

	}
	clearSecureData() {
	  if (isPlatformBrowser(this.platform)) {
		localStorage.clear();
	  }
	}
}
