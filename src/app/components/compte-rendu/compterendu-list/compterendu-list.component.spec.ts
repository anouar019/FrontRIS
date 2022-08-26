import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompterenduListComponent } from './compterendu-list.component';

describe('CompterenduListComponent', () => {
  let component: CompterenduListComponent;
  let fixture: ComponentFixture<CompterenduListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompterenduListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompterenduListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
