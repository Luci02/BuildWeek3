import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastaEditComponent } from './pasta-edit.component';

describe('PastaEditComponent', () => {
  let component: PastaEditComponent;
  let fixture: ComponentFixture<PastaEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PastaEditComponent]
    });
    fixture = TestBed.createComponent(PastaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
