import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalConstComponent } from './global-const.component';

describe('GlobalConstComponent', () => {
  let component: GlobalConstComponent;
  let fixture: ComponentFixture<GlobalConstComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalConstComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GlobalConstComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
