import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaBrunoComponent } from './tabela-bruno.component';

describe('TabelaBrunoComponent', () => {
  let component: TabelaBrunoComponent;
  let fixture: ComponentFixture<TabelaBrunoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabelaBrunoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaBrunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
