import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerobuilderComponent } from './herobuilder.component';

describe('HerobuilderComponent', () => {
  let component: HerobuilderComponent;
  let fixture: ComponentFixture<HerobuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HerobuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HerobuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
