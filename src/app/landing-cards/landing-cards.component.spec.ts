import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingCardsComponent } from './landing-cards.component';

describe('LandingCardsComponent', () => {
  let component: LandingCardsComponent;
  let fixture: ComponentFixture<LandingCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandingCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
