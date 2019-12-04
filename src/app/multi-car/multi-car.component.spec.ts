import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiCarComponent } from './multi-car.component';

describe('MultiCarComponent', () => {
  let component: MultiCarComponent;
  let fixture: ComponentFixture<MultiCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
