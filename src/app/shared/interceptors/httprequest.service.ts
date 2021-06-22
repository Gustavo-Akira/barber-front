import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { LoadService } from "../service/load.service";

@Injectable()
export class HttpRequestInterceptor implements HttpInterceptor{
    
    constructor(
        private _loading: LoadService
    ){

    }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this._loading.setLoading(true, req.url);
        return next.handle(req)
        .pipe(catchError((err: HttpErrorResponse)=>{
            this._loading.setLoading(false, req.url);
            return throwError(err);
        }))
        .pipe(map<HttpEvent<any>, any>((evt: HttpEvent<any>)=>{
            if (evt instanceof HttpResponse) {
                this._loading.setLoading(false, req.url);
            }
            return evt;
        }));
    }
    
}