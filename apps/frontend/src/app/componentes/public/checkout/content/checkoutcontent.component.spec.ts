import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutContentComponent } from './checkoutcontent.component';

describe('ContentComponent', () => {
  let component: CheckoutContentComponent;
  let fixture: ComponentFixture<CheckoutContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckoutContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckoutContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
