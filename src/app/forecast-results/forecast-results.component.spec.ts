import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForecastResultsComponent } from './forecast-results.component';

describe('ForecastResultsComponent', () => {
  let component: ForecastResultsComponent;
  let fixture: ComponentFixture<ForecastResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForecastResultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForecastResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
