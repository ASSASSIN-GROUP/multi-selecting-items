import { Component, OnInit } from '@angular/core';
import { FruitService } from '../services/fruit.service';
import { Fruit } from '../services/fruit';

@Component({
  selector: 'app-selected-list',
  templateUrl: './selected-list.component.html',
  styleUrls: ['./selected-list.component.css']
})
export class SelectedListComponent implements OnInit {

  selectedFruit: Fruit;
  fruits: Fruit[];
  constructor(private fruitService: FruitService) { }

  ngOnInit() {

  }

}
