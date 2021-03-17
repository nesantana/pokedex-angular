import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardByIdComponent } from './card-by-id.component';

describe('CardByIdComponent', () => {
  let component: CardByIdComponent;
  let fixture: ComponentFixture<CardByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
