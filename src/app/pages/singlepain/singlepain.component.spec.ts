import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglepainComponent } from './singlepain.component';

describe('SinglepainComponent', () => {
  let component: SinglepainComponent;
  let fixture: ComponentFixture<SinglepainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglepainComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglepainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
