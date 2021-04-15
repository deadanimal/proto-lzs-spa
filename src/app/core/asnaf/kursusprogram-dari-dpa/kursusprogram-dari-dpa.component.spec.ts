import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KursusprogramDariDpaComponent } from './kursusprogram-dari-dpa.component';

describe('KursusprogramDariDpaComponent', () => {
  let component: KursusprogramDariDpaComponent;
  let fixture: ComponentFixture<KursusprogramDariDpaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KursusprogramDariDpaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KursusprogramDariDpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
