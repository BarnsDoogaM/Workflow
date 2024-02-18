import { IsLoadingService } from './../isLoading.service';
import { Component, OnInit } from '@angular/core';
// import { IsLoadingService } from '../isLoading.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private isloadingService: IsLoadingService) { }

  comment$ = this.isloadingService.comment$

  ngOnInit(): void {
  }

}
