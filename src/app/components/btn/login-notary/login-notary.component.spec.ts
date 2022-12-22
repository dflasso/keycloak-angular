import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginNotaryComponent } from './login-notary.component';

describe('LoginNotaryComponent', () => {
  let component: LoginNotaryComponent;
  let fixture: ComponentFixture<LoginNotaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginNotaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginNotaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
