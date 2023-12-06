import { Component, OnInit } from '@angular/core';
import { AlunoService } from '../shared/aluno.service';
import { IListAlunos } from '../model/IListAlunos';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { IEditAluno } from '../model/IEditAluno';

@Component({
  selector: 'app-edit-alunos',
  templateUrl: './edit-alunos.component.html',
  styleUrls: ['./edit-alunos.component.css']
})
export class EditAlunosComponent implements OnInit{


  aluno: IListAlunos = { id: 0, nome: '', matricula: '', nascimento: new Date(), dataHoraCadastro: new Date() };
  editedAluno: IEditAluno = { nome: '', matricula: '', nascimento: this.aluno.nascimento };

  constructor(private route: ActivatedRoute, private alunoService: AlunoService) { }

  ngOnInit(): void {
    // Obtém o ID do aluno da rota
    const alunoId = this.route.snapshot.paramMap.get('id');

    // Recupera os detalhes do aluno com base no ID
    if (alunoId) {
      this.alunoService.getAlunoById(alunoId).subscribe(
        (aluno: IListAlunos) => {
          this.aluno = aluno;
        },
        (erro) => {
          console.error('Erro ao obter detalhes do aluno:', erro);
        }
      );
    }
  }

  salvarEdicao(): void {
    const propriedadesEditadas: IEditAluno = {
      nome: this.editedAluno.nome || this.aluno.nome,
      matricula: this.editedAluno.matricula || this.aluno.matricula,
      nascimento: this.editedAluno.nascimento || this.aluno.nascimento,
    };

    const alunoAtualizado: IListAlunos = { ...this.aluno, ...propriedadesEditadas };

    // Lógica para salvar as edições do aluno
    this.alunoService.editarAluno(alunoAtualizado).subscribe(
      (response: any) => {
        if (response) {
          console.log('Aluno atualizado com sucesso!');
          // Lógica adicional, se necessário
        } else if (response.error) {
          console.error('Erro ao atualizar aluno. Detalhes:', response.error);
          // Lógica de tratamento de erro, se necessário
        }
      },
      (erro) => {
        console.error('Erro na solicitação HTTP:', erro);
        // Lógica de tratamento de erro, se necessário
      }
    );
  }
}
