import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KursusprogramDariKetigaComponent } from './kursusprogram-dari-ketiga.component';

describe('KursusprogramDariKetigaComponent', () => {
  let component: KursusprogramDariKetigaComponent;
  let fixture: ComponentFixture<KursusprogramDariKetigaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KursusprogramDariKetigaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KursusprogramDariKetigaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
