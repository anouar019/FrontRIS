import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenListDetailComponent } from './examen-list-detail.component';

describe('ExamenListDetailComponent', () => {
  let component: ExamenListDetailComponent;
  let fixture: ComponentFixture<ExamenListDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExamenListDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExamenListDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
