import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonbuilderComponent } from './buttonbuilder.component';

describe('ButtonbuilderComponent', () => {
  let component: ButtonbuilderComponent;
  let fixture: ComponentFixture<ButtonbuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonbuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonbuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
