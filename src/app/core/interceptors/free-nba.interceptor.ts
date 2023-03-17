import { HttpEvent, HttpHandlerFn, HttpRequest } from '@angular/common/http';
import { environment } from '@environment';
import { Observable } from 'rxjs';

export function freeNbaInterceptor(req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> {
  let headers = req.headers;
  Object.entries(environment.freeNbaApi.headers).forEach(([key, value]) => {
    headers = headers.set(key, value);
  });
  const apiReq = req.clone({ url: `${environment.freeNbaApi.rootUrl}/${req.url}`, headers });
  return next(apiReq);
}
