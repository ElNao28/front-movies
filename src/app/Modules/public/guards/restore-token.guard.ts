import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';
import { inject } from '@angular/core';
import { catchError, map, of } from 'rxjs';

export const restoreTokenGuard: CanActivateFn = (route, state) => {
  const token = route.params['token'];
  const authService: AuthService = inject(AuthService);
  const router: Router = inject(Router);

  return authService.checkValidityToken(token).pipe(
    map(() => {
      route.data = {
        token,
      };
      return true;
    }),
    catchError(() => {
      console.log('Token expirado');
      return of(router.parseUrl('/url-expired'));
    })
  );
};
