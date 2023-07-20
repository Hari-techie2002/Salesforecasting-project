import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forecast-results',
  templateUrl: './forecast-results.component.html',
  styleUrls: ['./forecast-results.component.css']
})
export class ForecastResultsComponent implements OnInit {
  forecastHtml: string = '';

  constructor(private http: HttpClient) { }

  ngOnInit() {
    // Fetch the HTML content from the Flask endpoint using HttpClient
    const apiUrl = 'http://localhost:5000/forecast_values';
    this.http.get(apiUrl, { responseType: 'text' }).subscribe(
      (response: string) => {
        this.forecastHtml = response;
      },
      (error: any) => {
        console.error('Error fetching forecast HTML:', error);
      }
    );
  }
}
