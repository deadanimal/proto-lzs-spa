import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuntutanComponent } from './tuntutan.component';

describe('TuntutanComponent', () => {
  let component: TuntutanComponent;
  let fixture: ComponentFixture<TuntutanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuntutanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuntutanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
