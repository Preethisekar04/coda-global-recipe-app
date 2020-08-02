import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Recipe } from './shared/model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  private readonly FOOD_URL = 'http://starlord.hackerearth.com/recipe';
  constructor(private http: HttpClient) {}

  getFoodItems = (): Observable<Recipe[]> => {
    return this.http.get<Recipe[]>(`${this.FOOD_URL}`);
  }
}
