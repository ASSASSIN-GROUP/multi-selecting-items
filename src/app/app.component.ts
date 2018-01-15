import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedFruitArray = [];
  fruits = [
    { id: 1, name: 'Apple', des: 'This is an Apple.', amount: 5 },
    { id: 2, name: 'Banana', des: 'This is a Banana.', amount: 10 },
    { id: 3, name: 'Peach', des: 'This is a Peach.', amount: 4 },
    { id: 4, name: 'Pear', des: 'This is a Pear.', amount: 7 },
    { id: 5, name: 'Grape', des: 'This is a Grape.', amount: 8}
  ];

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
