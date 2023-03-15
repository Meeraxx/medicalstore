import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglebabyComponent } from './singlebaby.component';

describe('SinglebabyComponent', () => {
  let component: SinglebabyComponent;
  let fixture: ComponentFixture<SinglebabyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglebabyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglebabyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
