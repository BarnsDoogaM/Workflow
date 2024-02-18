import { Component, OnInit, OnDestroy, ElementRef } from "@angular/core";
import { FormService } from "./form.service";
import { post } from './post';
import { debounceTime, distinctUntilChanged, fromEvent, map } from "rxjs";
import { FormBuilder, FormGroup } from "@angular/forms";
import { Validators } from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, OnDestroy {
  formGroup: FormGroup;
  SearchPost: string = '';
  Posts: post[] = [];
  isLoading: boolean = false;
  isTyping: boolean = false;
  
  constructor(private formService: FormService, private el: ElementRef, private fb: FormBuilder) { }


  ngOnInit(): void {
    this.fetchPosts();

    this.formGroup = this.fb.group({
      title: ['', [Validators.required]],
      email: ['', [Validators.required]]
    })
  }

  fetchPosts(): void {
    this.isLoading = true;
    this.formService.getPost().subscribe(posts => {
      this.Posts = posts;
      this.isLoading = false;
    });
  }

  searchPosts(event: Event): void {
    const searchTerm = (event.target as HTMLInputElement).value;
    this.isTyping = searchTerm.length > 0;

   
    const searchObservable = fromEvent<Event>(this.el.nativeElement, 'input').pipe(
      map((e: Event) => (e.target as HTMLInputElement).value),
      debounceTime(30), 
      distinctUntilChanged()
    );


    searchObservable.subscribe((searchTerm: string) => {
      if (searchTerm.trim() === '') {
        this.fetchPosts();
      } else {
        this.isLoading = true;
        this.formService.getPost().subscribe(posts => {
          this.Posts = posts.filter(post =>
            post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            post.body.toLowerCase().includes(searchTerm.toLowerCase())
          );
          this.isLoading = false;
        });
      }
    });
  }

  getBackgroundColor(colorId: number): string {
    if (colorId >= 1 && colorId <= 10) {
      return 'white';
    } else if (colorId >= 10 && colorId <= 15) {
      return 'rebecapurple';
    } else if (colorId >= 15 && colorId <= 30) {
      return 'purple';
    } else {
      return 'gold';
    }
  }

  ngOnDestroy(): void {
    // Your ngOnDestroy logic, if any
  }
}
