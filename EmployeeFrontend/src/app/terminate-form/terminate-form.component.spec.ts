import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminateFormComponent } from './terminate-form.component';

describe('TerminateFormComponent', () => {
  let component: TerminateFormComponent;
  let fixture: ComponentFixture<TerminateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminateFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
