import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LzsAdminComponent } from './lzs-admin.component';

describe('LzsAdminComponent', () => {
  let component: LzsAdminComponent;
  let fixture: ComponentFixture<LzsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LzsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LzsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
