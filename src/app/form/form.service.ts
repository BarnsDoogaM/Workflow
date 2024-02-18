import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { post } from './post';
import { BehaviorSubject, Observable, Subject, delay, tap } from "rxjs";

@Injectable({
    providedIn: 'root',
})

export class FormService {

    private isLoadingSubject = new BehaviorSubject<boolean>(false);
    isLoadingSubject$ = this.isLoadingSubject.asObservable();

    private productUrl = 'https://jsonplaceholder.typicode.com/posts';

    constructor(private http: HttpClient) { }

    getPost(): Observable<post[]> {
        this.isLoadingSubject.next(true);
        return this.http.get<post[]>(this.productUrl).pipe(
            delay(400),
            tap(post => {
                console.log('post', JSON.stringify(post));
                this.isLoadingSubject.next(false);
            })
        )
    }

    getSinglePost(id: number): Observable<post>{
        return this.http.get<post>(`${this.productUrl}/${id}`)
    }
}

