import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../core'

// import { UserService } from '../core';
import { take } from 'rxjs/operators';

@Injectable()
export class MainAuthResolver implements Resolve<boolean> {
  constructor(
    private router: Router,
    private UserService: UserService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> {

    return this.UserService.isAuthenticated.pipe(take(1));

  }
}
