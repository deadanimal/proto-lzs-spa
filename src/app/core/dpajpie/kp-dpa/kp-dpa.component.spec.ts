import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpDpaComponent } from './kp-dpa.component';

describe('KpDpaComponent', () => {
  let component: KpDpaComponent;
  let fixture: ComponentFixture<KpDpaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpDpaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpDpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
