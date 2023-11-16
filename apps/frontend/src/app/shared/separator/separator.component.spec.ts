import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeparatorComponent } from './separator.component';

describe('SearchComponent', () => {
  let component: SeparatorComponent;
  let fixture: ComponentFixture<SeparatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeparatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeparatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});