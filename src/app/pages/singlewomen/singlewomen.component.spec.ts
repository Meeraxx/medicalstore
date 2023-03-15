import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglewomenComponent } from './singlewomen.component';

describe('SinglewomenComponent', () => {
  let component: SinglewomenComponent;
  let fixture: ComponentFixture<SinglewomenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinglewomenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinglewomenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
