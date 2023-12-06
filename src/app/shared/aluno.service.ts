import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { IListAlunos } from '../model/IListAlunos';
import { tap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  private apiURL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public getAlunos(): Observable<any> {
    return this.http.get<any>(`${this.apiURL}api/aluno/listar`);
  }

  public addAluno(aluno: any): Observable<any> {
    return this.http.post<any>(`${this.apiURL}api/aluno/incluir`, aluno);
  }

  // public deleteAluno(aluno: any): Observable<any> {
  //   return this.http.delete<any>(`${this.apiURL}api/aluno/remover`, aluno);
  // }

//  public deleteAluno(aluno: IListAlunos): Observable<any> {
//     const options = {
//       body: aluno,
//     };
  
//     return this.http.request('delete', `${this.apiURL}api/aluno/remover`, options);
//   } 

public deleteAluno(aluno: IListAlunos): Observable<any> {
  const options = {
    body: aluno,
  };

  return this.http.request('delete', `${this.apiURL}api/aluno/remover`, options).pipe(
    tap(response => console.log('Resposta do serviço (deleteAluno):', response))
  );
}


  public atualizarListaAlunos(): Observable<IListAlunos[]> {
    return this.http.get<IListAlunos[]>(`${this.apiURL}api/aluno/listar`);
  }
}
