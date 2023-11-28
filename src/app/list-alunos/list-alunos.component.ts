import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { IListAlunos } from '../model/IListAlunos';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { AlunoService } from '../shared/aluno.service';

@Component({
  selector: 'app-list-alunos',
  templateUrl: './list-alunos.component.html',
  styleUrls: ['./list-alunos.component.css']
})
export class ListAlunosComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'matricula', 'nascimento', 'dataHoraCadastro'];
  dataSource = new MatTableDataSource<IListAlunos>([]);

  @ViewChild('input', { static: true }) input: HTMLInputElement | undefined;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator | undefined;
  @ViewChild(MatSort, { static: true }) sort: MatSort | undefined;


  constructor(private alunoService: AlunoService) {
    this.alunoService.getAlunos().subscribe((alunos: IListAlunos[]) => {
      this.dataSource.data = alunos;
    });
  }

  ngOnInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
    if (this.sort) {
      this.dataSource.sort = this.sort;
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
