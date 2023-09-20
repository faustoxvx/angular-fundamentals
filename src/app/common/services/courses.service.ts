import { Injectable } from '@angular/core';
import { Course } from '../models/course';
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://localhost:3000';

@Injectable({
  providedIn: 'root',
})
export class CoursesService {
  model = 'courses';

  constructor(private http: HttpClient) {}

  all() {
    return this.http.get(this.getUrl());
  }

  private getUrl() {
    return `${BASE_URL}/${this.model}`;
  }

  find(id) {
    return this.http.get(this.getUrlWithId(id));
  }

  create(course) {
    return this.http.post(this.getUrl(), course);
  }

  update(course) {
    return this.http.put(this.getUrlWithId(course.id), course);
  }

  delete(id) {
    return this.http.delete(this.getUrlWithId(id));
  }

  private getUrlWithId(id) {
    return `${this.getUrl()}/${id}`;
  }
}
