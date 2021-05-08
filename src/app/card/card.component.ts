import {Component, Input, OnInit} from "@angular/core";
import ICard from "../../models/ICard";

@Component({
    templateUrl: "./card.component.html",
    selector: "card-component",
    styleUrls: ["card.component.scss"]
})
export class CardComponent implements OnInit {
    @Input()
    card!: ICard;

    @Input()
    cardIndex!: number;

    // set title(value) { this.card.title = value }
    // get title() { return this.card.title }
    // set body(value) { this.card.content = value }
    // get body() { return this.card.content }
    title!: string;
    body!: string;

    imgSrc = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/480px-JavaScript-logo.png";

    date: Date = new Date();

    ngOnInit(): void {
        this.title = this.card.title;
        this.body = this.card.content;

        setTimeout(() => {
            // this.title = "TypeScript";
            this.imgSrc = "https://cdn.worldvectorlogo.com/logos/typescript.svg";
        }, 1500);
    }

    onInput(text: string): void {
        // const text = (<HTMLInputElement>event.target).value;
        this.title = text;
    }
}