import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VegeburgerComponent } from './vegeburger.component';

describe('VegeburgerComponent', () => {
  let component: VegeburgerComponent;
  let fixture: ComponentFixture<VegeburgerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VegeburgerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VegeburgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
