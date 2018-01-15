import { Injectable } from '@angular/core';
import { Fruit } from './fruit';
import { FRUITS } from './mock-fruits';

@Injectable()
export class FruitService {
    selectedFruits: Fruit[] = [];
    getFruits(): Fruit[] {
        return FRUITS;
    }

    getSelectedFruits(): Fruit[] {
        return this.selectedFruits;
    }

    addFruit(id: number): void {
        const fruit = FRUITS.find(ob => ob.id === id);
        if (this.selectedFruits.indexOf(fruit) < 0) {
            this.selectedFruits.push(fruit);
        }
    }

    removeFruit(id: number): void {
        const fruit = this.selectedFruits.find(ob => ob.id === id);
        const fruitIndex = this.selectedFruits.indexOf(fruit);
        this.selectedFruits.splice(fruitIndex, 1);
    }
}
