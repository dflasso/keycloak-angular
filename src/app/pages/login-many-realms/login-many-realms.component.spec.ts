import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginManyRealmsComponent } from './login-many-realms.component';

describe('LoginManyRealmsComponent', () => {
  let component: LoginManyRealmsComponent;
  let fixture: ComponentFixture<LoginManyRealmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginManyRealmsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginManyRealmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
