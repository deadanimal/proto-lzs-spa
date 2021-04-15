import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SenaraiKerjaKosongComponent } from './senarai-kerja-kosong.component';

describe('SenaraiKerjaKosongComponent', () => {
  let component: SenaraiKerjaKosongComponent;
  let fixture: ComponentFixture<SenaraiKerjaKosongComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SenaraiKerjaKosongComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SenaraiKerjaKosongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
