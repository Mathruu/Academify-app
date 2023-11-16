import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAlunosComponent } from './edit-alunos.component';

describe('EditAlunosComponent', () => {
  let component: EditAlunosComponent;
  let fixture: ComponentFixture<EditAlunosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditAlunosComponent]
    });
    fixture = TestBed.createComponent(EditAlunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
