import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAppartComponent } from './form-appart.component';

describe('FormAppartComponent', () => {
  let component: FormAppartComponent;
  let fixture: ComponentFixture<FormAppartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAppartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAppartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
