import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPrivadoComponent } from './contact-privado.component';

describe('ContactPrivadoComponent', () => {
  let component: ContactPrivadoComponent;
  let fixture: ComponentFixture<ContactPrivadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactPrivadoComponent]
    });
    fixture = TestBed.createComponent(ContactPrivadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
