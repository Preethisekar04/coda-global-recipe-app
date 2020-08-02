import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FoodService } from '../food.service';
import { Recipe } from '../shared/model';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-food-menu',
  templateUrl: './food-menu.component.html',
  styleUrls: ['./food-menu.component.css'],
})
export class FoodMenuComponent implements OnInit {
  recipes: Recipe[] = [];
  searchTerm = '';
  searchKey = 'name';
  recipe: Recipe;
  @ViewChild('modalTemplate')
  private modalTemplate: TemplateRef<any>;
  bsModalRef: BsModalRef;

  constructor(
    private service: FoodService,
    private modalService: BsModalService
  ) {}

  ngOnInit(): void {
    this.init();
  }

  private init = (): void => {
    this.getFoodItems();
  }

  private getFoodItems = () => {
    this.service.getFoodItems().subscribe((response) => {
      this.recipes = response;
    });
  }

  onItemClicked = (recipe: Recipe) => {
    this.recipe = recipe;
    this.openModal();
  }

  openModal() {
    this.bsModalRef = this.modalService.show(this.modalTemplate, {
      class: 'modal-md',
      animated: true,
      backdrop: true,
    });
  }
}
