import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCjComponent } from './login-cj.component';

describe('LoginCjComponent', () => {
  let component: LoginCjComponent;
  let fixture: ComponentFixture<LoginCjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginCjComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginCjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
