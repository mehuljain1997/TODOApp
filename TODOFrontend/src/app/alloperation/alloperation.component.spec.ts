import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlloperationComponent } from './alloperation.component';

describe('AlloperationComponent', () => {
  let component: AlloperationComponent;
  let fixture: ComponentFixture<AlloperationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlloperationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlloperationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
