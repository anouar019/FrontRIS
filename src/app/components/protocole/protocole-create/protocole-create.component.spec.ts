import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtocoleCreateComponent } from './protocole-create.component';

describe('ProtocoleCreateComponent', () => {
  let component: ProtocoleCreateComponent;
  let fixture: ComponentFixture<ProtocoleCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProtocoleCreateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProtocoleCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
