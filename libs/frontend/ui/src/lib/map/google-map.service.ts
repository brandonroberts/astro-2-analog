import { HttpClient, provideHttpClient, withJsonpSupport } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class GoogleMapsService {
    static clientProviders = [provideHttpClient(withJsonpSupport())];
    static renderProviders = [GoogleMapsService.clientProviders];

    private readonly currentApiStatus$$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public readonly obsCurrentApiStatus$: Observable<boolean>;

    private readonly httpClient: HttpClient = inject(HttpClient);

    constructor(
    ) {
        this.obsCurrentApiStatus$ = this.currentApiStatus$$.asObservable();

        setTimeout(() => {
            this.currentApiStatus$$.next(true);
        }, 500);

        //    this.httpClient
        //         .get('https://maps.googleapis.com/maps/api/js?key=<GOOGLE_MAPS_API_KEY>')
        //         .subscribe({
        //             next: (): void => {
        //             },
        //             error: (err: Error): void => {
        //                 //             this.currentApiStatus$$.next(false);
        //             },
        //         });
    }
}
