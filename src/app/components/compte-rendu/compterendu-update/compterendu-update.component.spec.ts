import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompterenduUpdateComponent } from './compterendu-update.component';

describe('CompterenduUpdateComponent', () => {
  let component: CompterenduUpdateComponent;
  let fixture: ComponentFixture<CompterenduUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompterenduUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompterenduUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
