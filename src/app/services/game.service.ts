import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Game } from '../interfaces/interfaces';
import { of } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class GameService {

  private juegos:Game[] = [];

  constructor(private http: HttpClient) { 

  }



  getNominados(){

    if(this.juegos.length > 0){
      console.log('Desde cache');
      return of(this.juegos);
    }else{
      console.log('Desde net')
      return this.http.get<Game[]>(`${ environment.url }/api/goty`)
      .pipe(
        tap(
          juegos=>this.juegos = juegos
          )
        );
    }
    
  }

  

  // votarJuego( id: string) {

  //   return this.http.post(`${ environment.url }/api/goty/${ id }`,{})
  //   .pipe(
  //     catchError(err:any=>{
  //       console.log('Error en al peticion');
  //       return of(err)
  //     })
  //   )


  // }



  votarJuego( id: string) {

    return this.http.post(`${ environment.url }/api/goty/${ id }`,{})
        .pipe(
          catchError( err => {
            return of( err.error );
          })
        )

  }


}







