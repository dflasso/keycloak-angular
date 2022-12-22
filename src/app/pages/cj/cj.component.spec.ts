import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CjComponent } from './cj.component';

describe('CjComponent', () => {
  let component: CjComponent;
  let fixture: ComponentFixture<CjComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CjComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
