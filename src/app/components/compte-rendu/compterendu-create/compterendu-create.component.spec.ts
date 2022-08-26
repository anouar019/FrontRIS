import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompterenduCreateComponent } from './compterendu-create.component';

describe('CompterenduCreateComponent', () => {
  let component: CompterenduCreateComponent;
  let fixture: ComponentFixture<CompterenduCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompterenduCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompterenduCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
