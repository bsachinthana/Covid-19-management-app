import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor() { }

  isSlowNetwork() {
    // tslint:disable-next-line:no-string-literal
    const connection = navigator['connection'];

    if (!connection) {
      // if the browser doesn't support it, we render the fast template
      return false;
    }
    if (/\slow-2g|2g/.test(connection.effectiveType)) {
      return true;
    } else {
      return false;
    }
  }
}
