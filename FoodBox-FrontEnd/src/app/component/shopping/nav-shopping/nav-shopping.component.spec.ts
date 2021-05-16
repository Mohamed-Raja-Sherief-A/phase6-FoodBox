import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavShoppingComponent } from './nav-shopping.component';

describe('NavShoppingComponent', () => {
  let component: NavShoppingComponent;
  let fixture: ComponentFixture<NavShoppingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavShoppingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavShoppingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
