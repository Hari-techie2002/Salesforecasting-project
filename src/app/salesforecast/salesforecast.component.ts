import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-salesforecast',
  templateUrl: './salesforecast.component.html',
  styleUrls: ['./salesforecast.component.css']
})
export class SalesforecastComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
  }
  
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      const fileExtension = file.name.split('.').pop()?.toLowerCase();
      if (fileExtension === 'csv') {
      const formData = new FormData();
      formData.append('file', file);
      this.uploadFile(formData);
      }
      else {
          alert('Please select only csv files');
        }
  }
  } 

  uploadFile(formData: FormData) {
    this.http.post('http://127.0.0.1:5000/upload', formData)
      .subscribe(
        response => {
          console.log('File uploaded successfully');
          // Handle the response from the Flask backend if needed
        },
        error => {
          console.error('Error uploading file:', error);
          // Handle any errors that occurred during the file upload
        }
      );
  }

  navigateToGraph() {
    this.router.navigate(['/graph']);
  }
  
  
}
