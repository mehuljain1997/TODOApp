import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginresisterComponent } from './loginresister.component';

describe('LoginresisterComponent', () => {
  let component: LoginresisterComponent;
  let fixture: ComponentFixture<LoginresisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginresisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginresisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
