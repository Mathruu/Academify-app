import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../shared/aluno.service';
import { IListAlunos } from '../model/IListAlunos';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  constructor(private alunoService: AlunoService, private snackBar: MatSnackBar) {}

  adicionarAluno() {

    const alunoData = {
      nome: this.nome,
      matricula: this.matricula,
      nascimento: this.nascimento,
      dataHoraCadastro: new Date().toISOString()
    };

    this.alunoService.addAluno(alunoData).subscribe((alunos: IListAlunos[]) => {
      this.dataSource.data = alunos;
      this.mostarSnackBar('Aluno adicionado com sucesso!');
    },
    (erro) => {
      console.error(erro);
      this.mostarSnackBar('Falha ao adicionar aluno!');
    });

    this.nome = '';
    this.matricula = '';
    this.nascimento = '';
  }

    private mostarSnackBar(mensagem: string) : void {
      this.snackBar.open(mensagem, 'OK', {
        duration: 3000,
        horizontalPosition: 'center',
        verticalPosition: 'bottom'
      });
}
}
