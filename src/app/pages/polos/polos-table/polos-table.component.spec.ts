import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolosTableComponent } from './polos-table.component';

describe('PolosTableComponent', () => {
  let component: PolosTableComponent;
  let fixture: ComponentFixture<PolosTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolosTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolosTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
