import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtocoleListComponent } from './protocole-list.component';

describe('ProtocoleListComponent', () => {
  let component: ProtocoleListComponent;
  let fixture: ComponentFixture<ProtocoleListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProtocoleListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProtocoleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
