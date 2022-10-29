import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private rooturl:string,private http:HttpClient) { }

  getAll(){
    return this.http.get(this.rooturl)
      .pipe(
        catchError((error:HttpErrorResponse,caught: Observable<any>)=>{
          return throwError(()=>{
            return "new app_error(error)";
          })
        })
      );
  }

  create(Resourse:any){
    return this.http.post(this.rooturl,JSON.stringify(Resourse))
      .pipe(
        catchError((error:HttpErrorResponse,caught:Observable<any>)=>{
          return throwError(()=>{
            if(error.status===400)
              return "new BadRequestError(error)";
            return "new app_error(error)";
          });
        })
      );
  }

  update(Path:string,Resource:any){
    return this.http.put(this.rooturl+Path,JSON.stringify(Resource))
    .pipe(
      catchError((error:HttpErrorResponse,caught:Observable<any>)=>{
        return throwError(()=>{
          if(error.status===400)
            return "new BadRequestError(error)";
          return "new app_error(error)";
        });
      })
    );
  }

  delete(Path:string){
    return this.http.delete(this.rooturl+Path)
    .pipe(
      catchError((error:HttpErrorResponse,caught:Observable<any>)=>{
        return throwError(()=>{
          if(error.status===404)
            return "new NotFoundError(error)";
          return "new app_error(error)";
        });
      })
    );
  }


}
