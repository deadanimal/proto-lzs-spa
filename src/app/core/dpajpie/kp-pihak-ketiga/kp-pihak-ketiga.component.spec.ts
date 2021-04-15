import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KpPihakKetigaComponent } from './kp-pihak-ketiga.component';

describe('KpPihakKetigaComponent', () => {
  let component: KpPihakKetigaComponent;
  let fixture: ComponentFixture<KpPihakKetigaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KpPihakKetigaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KpPihakKetigaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
