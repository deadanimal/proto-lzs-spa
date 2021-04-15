import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KelasFardhuAinComponent } from './kelas-fardhu-ain.component';

describe('KelasFardhuAinComponent', () => {
  let component: KelasFardhuAinComponent;
  let fixture: ComponentFixture<KelasFardhuAinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KelasFardhuAinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KelasFardhuAinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
