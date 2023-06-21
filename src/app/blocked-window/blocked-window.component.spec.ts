import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockedWindowComponent } from './blocked-window.component';

describe('BlockedWindowComponent', () => {
  let component: BlockedWindowComponent;
  let fixture: ComponentFixture<BlockedWindowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlockedWindowComponent]
    });
    fixture = TestBed.createComponent(BlockedWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
