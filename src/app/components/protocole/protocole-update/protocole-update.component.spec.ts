import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtocoleUpdateComponent } from './protocole-update.component';

describe('ProtocoleUpdateComponent', () => {
  let component: ProtocoleUpdateComponent;
  let fixture: ComponentFixture<ProtocoleUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProtocoleUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProtocoleUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
