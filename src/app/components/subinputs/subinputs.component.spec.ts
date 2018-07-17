import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubinputsComponent } from './subinputs.component';

describe('SubinputsComponent', () => {
  let component: SubinputsComponent;
  let fixture: ComponentFixture<SubinputsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubinputsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubinputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
