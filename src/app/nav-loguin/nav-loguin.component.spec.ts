import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavLoguinComponent } from './nav-loguin.component';

describe('NavLoguinComponent', () => {
  let component: NavLoguinComponent;
  let fixture: ComponentFixture<NavLoguinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavLoguinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavLoguinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
