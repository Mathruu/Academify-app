import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';


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
}
