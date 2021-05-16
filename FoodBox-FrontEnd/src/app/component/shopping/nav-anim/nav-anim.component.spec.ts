import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavAnimComponent } from './nav-anim.component';

describe('NavAnimComponent', () => {
  let component: NavAnimComponent;
  let fixture: ComponentFixture<NavAnimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavAnimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavAnimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
