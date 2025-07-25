import { HttpHeaders, HttpInterceptorFn } from '@angular/common/http';

export const requestInterceptor: HttpInterceptorFn = (req, next) => {
  console.log('request interceptor', req);
  const newReq = req.clone({
    headers: new HttpHeaders({ token: '1132321321jopa' }),
  });
  return next(newReq);
};
