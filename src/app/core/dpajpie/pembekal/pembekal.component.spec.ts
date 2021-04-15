import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PembekalComponent } from './pembekal.component';

describe('PembekalComponent', () => {
  let component: PembekalComponent;
  let fixture: ComponentFixture<PembekalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PembekalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PembekalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
