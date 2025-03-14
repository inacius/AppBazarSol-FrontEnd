import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ImportaJsonserverComponent } from './importa-jsonserver.component';

describe('ImportaJsonserverComponent', () => {
  let component: ImportaJsonserverComponent;
  let fixture: ComponentFixture<ImportaJsonserverComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportaJsonserverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportaJsonserverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
