import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolosRegisterComponent } from './polos-register.component';

describe('PolosRegisterComponent', () => {
  let component: PolosRegisterComponent;
  let fixture: ComponentFixture<PolosRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolosRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolosRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
