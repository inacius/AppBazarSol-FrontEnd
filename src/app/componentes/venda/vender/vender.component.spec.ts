import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { VenderComponent } from './vender.component';

describe('VenderComponent', () => {
  let component: VenderComponent;
  let fixture: ComponentFixture<VenderComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VenderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
