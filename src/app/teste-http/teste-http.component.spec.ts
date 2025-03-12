import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteHTTPComponent } from './teste-http.component';

describe('TesteHTTPComponent', () => {
  let component: TesteHTTPComponent;
  let fixture: ComponentFixture<TesteHTTPComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TesteHTTPComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteHTTPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
