import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerappComponent } from './customerapp.component';

describe('CustomerappComponent', () => {
  let component: CustomerappComponent;
  let fixture: ComponentFixture<CustomerappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerappComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
