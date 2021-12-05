import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Component8Component } from './component8.component';

describe('Component8Component', () => {
  let component: Component8Component;
  let fixture: ComponentFixture<Component8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Component8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
