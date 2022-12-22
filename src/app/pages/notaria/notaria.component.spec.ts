import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotariaComponent } from './notaria.component';

describe('NotariaComponent', () => {
  let component: NotariaComponent;
  let fixture: ComponentFixture<NotariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotariaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
