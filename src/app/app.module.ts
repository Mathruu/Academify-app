import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { TemplateComponent } from './template/template.component';
import { FooterComponent } from './template/footer/footer.component';
import { HeaderComponent } from './template/header/header.component';
import { ListAlunosComponent } from './list-alunos/list-alunos.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule} from '@angular/material/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSortModule} from '@angular/material/sort';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule} from '@angular/material/select';
import { EditAlunosComponent } from './edit-alunos/edit-alunos.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateAlunosComponent } from './create-alunos/create-alunos.component';
import { MatCardModule } from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TemplateComponent,
    FooterComponent,
    HeaderComponent,
    ListAlunosComponent,
    EditAlunosComponent,
    CreateAlunosComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    MatCardModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
