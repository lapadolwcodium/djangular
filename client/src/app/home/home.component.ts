import {Component, OnDestroy, OnInit} from '@angular/core';
import {VideoService} from '../videos/videos.service';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    providers: [VideoService]
})
export class HomeComponent implements OnInit, OnDestroy {

    constructor() {
    }

    public textInp: string = "test text inp";

    ngOnInit() {

    }

    ngOnDestroy() {

    }


}
