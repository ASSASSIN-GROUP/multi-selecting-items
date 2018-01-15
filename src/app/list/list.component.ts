import { Component, OnInit } from '@angular/core';
import { Fruit } from '../services/fruit';
import { FruitService } from '../services/fruit.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  selectedFruitArray = [];
  constructor() { }

  ngOnInit() {
  }

  toggleItemInArr(arr, item) {
    const index = arr.indexOf(item);
    index === -1 ? arr.push(item) : arr.splice(index, 1);
  }

  clickTable(fruit: any, event) {
    if (!event.ctrlKey) {
      this.selectedFruitArray = [];
    }

    this.toggleItemInArr(this.selectedFruitArray, fruit);
  }

  isFruitSelected(fruit: any) {
    return this.selectedFruitArray.indexOf(fruit) !== -1;
  }

}
