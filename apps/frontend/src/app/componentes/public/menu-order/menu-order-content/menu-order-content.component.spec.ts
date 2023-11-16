import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MenuOrderContentComponent } from './menu-order-content.component';

describe('MenuitemContentComponent', () => {
  let component: MenuOrderContentComponent;
  let fixture: ComponentFixture<MenuOrderContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuOrderContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuOrderContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
