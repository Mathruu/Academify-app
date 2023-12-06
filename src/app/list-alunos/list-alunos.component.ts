import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IListAlunos } from '../model/IListAlunos';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AlunoService } from '../shared/aluno.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-list-alunos',
  templateUrl: './list-alunos.component.html',
  styleUrls: ['./list-alunos.component.css']
})
export class ListAlunosComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'matricula', 'nascimento', 'dataHoraCadastro', 'acoes'];
  dataSource = new MatTableDataSource<IListAlunos>([]);

  @ViewChild('input', { static: true }) input: HTMLInputElement | undefined;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | undefined;
  @ViewChild(MatSort, { static: true }) sort: MatSort | undefined;


  constructor(private alunoService: AlunoService, private snackBar: MatSnackBar) {
    this.alunoService.getAlunos().subscribe((alunos: IListAlunos[]) => {
      this.dataSource.data = alunos;
    });
  }

  ngOnInit() {
    // this.atualizarLista();
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
    if (this.sort) {
      this.dataSource.sort = this.sort;
    }
  }

  // deletarAluno(aluno: IListAlunos): void {
  //   console.log("Aluno a ser excluído:", aluno);
  
  //   this.alunoService.deleteAluno(aluno).subscribe(
  //     (response: any) => {
  //       console.log("Resposta do serviço:", response);
  
  //       if (response && response.success) {
  //         this.dataSource.data = response.data;
  //         this.mostarSnackBar('Aluno excluído com sucesso!');
  //       } else if (response && response.error) {
  //         console.error("Erro ao excluir aluno. Detalhes:", response.error);
  //         this.mostarSnackBar('Falha ao excluir aluno!');
  //       }
  //     },
  //     (erro) => {
  //       console.error("Erro na solicitação HTTP:", erro);
  //       this.mostarSnackBar('Falha ao excluir aluno!');
  //     }
  //   );
  // }

  deletarAluno(aluno: IListAlunos): void {
    console.log("Aluno a ser excluído:", aluno);
  
    this.alunoService.deleteAluno(aluno).subscribe(
      (response: any) => {
        console.log("Resposta do serviço:", response);
  
        if (response) {
          this.atualizarLista();
          console.log("Lista atualizada com sucesso!");
          this.mostarSnackBar('Aluno excluído com sucesso!');
        } else {
          console.error("Erro ao excluir aluno. Detalhes:", response);
          this.mostarSnackBar('Falha ao excluir aluno!');
        }
      },
      (erro) => {
        console.error("Erro na solicitação HTTP:", erro);
        this.mostarSnackBar('Falha ao excluir aluno!');
      }
    );
  }
  
  private atualizarLista(): void {
    this.alunoService.getAlunos().subscribe(
      (alunos: IListAlunos[]) => {
        this.dataSource.data = alunos;
      },
      (erro) => {
        console.error("Erro ao obter a lista de alunos:", erro);
      }
    );
  }

  private mostarSnackBar(mensagem: string): void {
    this.snackBar.open(mensagem, 'OK', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
