import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerEditComponent } from './burger-edit.component';

describe('BurgerEditComponent', () => {
  let component: BurgerEditComponent;
  let fixture: ComponentFixture<BurgerEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BurgerEditComponent]
    });
    fixture = TestBed.createComponent(BurgerEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
