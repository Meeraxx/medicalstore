import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BabycareComponent } from './babycare.component';

describe('BabycareComponent', () => {
  let component: BabycareComponent;
  let fixture: ComponentFixture<BabycareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BabycareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BabycareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
