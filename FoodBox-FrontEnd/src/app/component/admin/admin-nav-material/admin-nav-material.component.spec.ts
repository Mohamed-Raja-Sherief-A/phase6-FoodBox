import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminNavMaterialComponent } from './admin-nav-material.component';

describe('AdminNavMaterialComponent', () => {
  let component: AdminNavMaterialComponent;
  let fixture: ComponentFixture<AdminNavMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminNavMaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminNavMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
