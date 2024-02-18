import { Component, OnInit, OnDestroy } from "@angular/core";
import { IsLoadingService } from "./isLoading.service";

@Component({
    selector: 'app-isLoading',
    templateUrl: './isLoading.component.html',
    styleUrls: ['./isLoading.component.css']
})

export class IsLoadingComponent{

    constructor(private isLoadinging: IsLoadingService){

    }

    comments$ = this.isLoadinging.Comments$;

}