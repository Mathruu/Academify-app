import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../shared/aluno.service';
import { IListAlunos } from '../model/IListAlunos';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-create-alunos',
  templateUrl: './create-alunos.component.html',
  styleUrls: ['./create-alunos.component.css']
})
export class CreateAlunosComponent {

  nome: string  = '';
  matricula: string = '';
  nascimento: string = '';

  displayedColumns: string[] = ['nome', 'matricula', 'nascimento', 'dataHoraCadastro'];
  dataSource = new MatTableDataSource<IListAlunos>([]);

  constructor(private alunoService: AlunoService) {}

  adicionarAluno() {

    const alunoData = {
      nome: this.nome,
      matricula: this.matricula,
      nascimento: this.nascimento,
      dataHoraCadastro: new Date().toISOString()
    };

    this.alunoService.addAluno(alunoData).subscribe((alunos: IListAlunos[]) => {
      this.dataSource.data = alunos;
    });
    
    this.nome = '';
    this.matricula = '';
    this.nascimento = '';
}
}
