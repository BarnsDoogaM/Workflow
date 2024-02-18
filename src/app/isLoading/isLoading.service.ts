import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { comment, todo } from "./Comment";

@Injectable({
    providedIn: 'root'
})

export class IsLoadingService{
    private commentUrl = 'https://jsonplaceholder.typicode.com/comments';
    private todosUrl = 'https://jsonplaceholder.typicode.com/todos';

    constructor(private http: HttpClient){}

    Comments$ = this.http.get<comment[]>(this.commentUrl);
    Todos$ = this.http.get<todo[]>(this.todosUrl);

    comment$ = this.http.get<comment>(this.commentUrl)
}