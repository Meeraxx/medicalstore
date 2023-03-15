import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiabeticsComponent } from './diabetics.component';

describe('DiabeticsComponent', () => {
  let component: DiabeticsComponent;
  let fixture: ComponentFixture<DiabeticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiabeticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiabeticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
