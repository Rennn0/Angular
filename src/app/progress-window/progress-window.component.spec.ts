import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressWindowComponent } from './progress-window.component';

describe('ProgressWindowComponent', () => {
  let component: ProgressWindowComponent;
  let fixture: ComponentFixture<ProgressWindowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProgressWindowComponent]
    });
    fixture = TestBed.createComponent(ProgressWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
