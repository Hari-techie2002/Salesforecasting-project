import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesforecastComponent } from './salesforecast.component';

describe('SalesforecastComponent', () => {
  let component: SalesforecastComponent;
  let fixture: ComponentFixture<SalesforecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalesforecastComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SalesforecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
