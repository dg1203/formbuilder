import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSubinputsComponent } from './view-subinputs.component';

describe('ViewSubinputsComponent', () => {
  let component: ViewSubinputsComponent;
  let fixture: ComponentFixture<ViewSubinputsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewSubinputsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewSubinputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
