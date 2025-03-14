import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TesteHTTPComponent } from './teste-http.component';

describe('TesteHTTPComponent', () => {
  let component: TesteHTTPComponent;
  let fixture: ComponentFixture<TesteHTTPComponent>;

  beforeEach(waitForAsync(() => {
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
