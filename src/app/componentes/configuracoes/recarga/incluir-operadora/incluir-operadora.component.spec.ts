import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IncluirOperadoraComponent } from './incluir-operadora.component';

describe('IncluirOperadoraComponent', () => {
  let component: IncluirOperadoraComponent;
  let fixture: ComponentFixture<IncluirOperadoraComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ IncluirOperadoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncluirOperadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
