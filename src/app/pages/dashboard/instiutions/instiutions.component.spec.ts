import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstiutionsComponent } from './instiutions.component';

describe('InstiutionsComponent', () => {
  let component: InstiutionsComponent;
  let fixture: ComponentFixture<InstiutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstiutionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InstiutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
