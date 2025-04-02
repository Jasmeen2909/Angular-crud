import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  constructor(private http: HttpClient) {}

  uploadFile(file: File): Observable<HttpEvent<any>> {
    const formData = new FormData();
    formData.append('file', file);

    // Suppose your backend is at /api/upload
    return this.http.post<any>('/api/upload', formData, {
      reportProgress: true,  // allows reporting of upload progress
      observe: 'events'      // we receive different HttpEvent types
    });
  }
}
