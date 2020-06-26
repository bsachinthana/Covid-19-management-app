import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Injectable } from '@angular/core';

const helper = new JwtHelperService();

@Injectable()
export class AuthGuard {

    constructor( public router: Router) { }

    canActivate(): boolean {
        if (!this.isAuthenticated()) {
            this.router.navigate(['/admin/login']);
            return false;
        }
        return true;
    }

    isAuthenticated() {
        const token = localStorage.getItem('token');
        return !helper.isTokenExpired(token);
    }
}
