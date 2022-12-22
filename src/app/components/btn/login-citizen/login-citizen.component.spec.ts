import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCitizenComponent } from './login-citizen.component';

describe('LoginCitizenComponent', () => {
  let component: LoginCitizenComponent;
  let fixture: ComponentFixture<LoginCitizenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginCitizenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginCitizenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
