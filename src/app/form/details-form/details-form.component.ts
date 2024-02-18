import { Component, OnInit } from '@angular/core';
import { FormService } from '../form.service';
import { post } from '../post';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-form',
  templateUrl: './details-form.component.html',
  styleUrls: ['./details-form.component.css']
})
export class DetailsFormComponent implements OnInit {


  post!: post;
  constructor(private FormService: FormService, private route: ActivatedRoute) { }



  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;

if(id !== null && id !== undefined){
  this.FormService.getSinglePost(id).subscribe(post => {
    this.post = post;
  });
}else{
  console.error('id is null or undefined');
}
  }

}
