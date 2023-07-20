import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-graph',
  templateUrl: './graph.component.html',
  styleUrls: ['./graph.component.css']
})
export class GraphComponent {
  graphImageUrl: string = '';
  selectedFile: string | Blob | undefined;

  constructor(private http: HttpClient, private router: Router) { }

  navigateToSalesForecast() {
    this.router.navigate(['/salesforecast']);
  }
  

 

  // onFileSelected(event: Event) {
  //   const inputElement = event.target as HTMLInputElement;
  //   const files = inputElement.files;
  
  //   if (files && files.length > 0) {
  //     this.selectedFile = files[0];
  //   }
  // }
  
  // loadGraph() {
  //   const apiUrl = 'http://localhost:5000/upload'; // Replace with your Flask API endpoint
  
  //   if (!this.selectedFile) {
  //     console.error('No file selected.');
  //     return;
  //   }
  
  //   const formData = new FormData();
  //   formData.append('file', this.selectedFile);
  
  //   this.http.post<Blob>(apiUrl, formData)
  //     .subscribe(response => {
  //       const graphImageUrl = URL.createObjectURL(response);
  
  //       const imgElement = document.createElement('img');
  //       imgElement.src = graphImageUrl;
  
  //       // Append the image element to the DOM to display the graph
  //       document.body.appendChild(imgElement);
  //     }, error => {
  //       console.error('Error loading graph:', error);
  //     });
  // }


  
}
