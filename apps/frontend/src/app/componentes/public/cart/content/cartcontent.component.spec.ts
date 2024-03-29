import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartContentComponent } from './cartcontent.component';

describe('ContentComponent', () => {
  let component: CartContentComponent;
  let fixture: ComponentFixture<CartContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
