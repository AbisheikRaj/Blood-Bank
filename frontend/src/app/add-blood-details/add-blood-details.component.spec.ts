import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBloodDetailsComponent } from './add-blood-details.component';

describe('AddBloodDetailsComponent', () => {
  let component: AddBloodDetailsComponent;
  let fixture: ComponentFixture<AddBloodDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBloodDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBloodDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
