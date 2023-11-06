import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaPrivadaComponent } from './pagina-privada.component';

describe('PaginaPrivadaComponent', () => {
  let component: PaginaPrivadaComponent;
  let fixture: ComponentFixture<PaginaPrivadaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaPrivadaComponent]
    });
    fixture = TestBed.createComponent(PaginaPrivadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
