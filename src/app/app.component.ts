import {Component} from '@angular/core';
import ICard from "../models/ICard";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'untitled4';
    cardsShown = true;

    cards: ICard[] = [
        {
            title: "JavaScript",
            content: "getSum(a, b) {\n    return a + b;\n}"
        },
        {
            title: "TypeScript",
            content: "getSum(a: number, b: number): number {\n    return a + b;\n}"
        },
        {
            title: "C#",
            content: "int GetSum(int a, int b) => a + b;"
        }
    ];

    toggleCardsVisibility() {
        this.cardsShown = !this.cardsShown;
    }
}
