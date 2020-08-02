import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../shared/model';

@Component({
  selector: 'app-food-item',
  templateUrl: './food-item.component.html',
  styleUrls: ['./food-item.component.css'],
})
export class FoodItemComponent implements OnInit {
  @Input()
  recipe: Recipe;

  @Output() itemClicked = new EventEmitter<Recipe>();

  constructor() {}

  ngOnInit(): void {}

  itemClick = (param) => {
    this.itemClicked.emit(param);
  }
}
