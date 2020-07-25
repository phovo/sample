import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StringUtilsService } from './utils/string-utils.service';

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {

    private token:string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"

    constructor() {
    }
    
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log(req)
        if (!req.headers.has('Access-Control-Allow-Origin')) {
            req = req.clone({ headers: req.headers.set('Access-Control-Allow-Origin', '*')});
        }

        req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + this.token) });
        return next.handle(req);
    }
}