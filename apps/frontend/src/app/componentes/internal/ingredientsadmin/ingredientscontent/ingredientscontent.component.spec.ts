import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientscontentComponent } from './ingredientscontent.component';

describe('ContentComponent', () => {
  let component: IngredientscontentComponent;
  let fixture: ComponentFixture<IngredientscontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngredientscontentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngredientscontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
