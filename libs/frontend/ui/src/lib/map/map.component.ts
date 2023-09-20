import { Component, inject, type OnInit } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { GoogleMapsService } from './google-map.service';
import { NgIf } from '@angular/common';
import { provideHttpClient, withJsonpSupport } from '@angular/common/http';

interface IMapMarker {
    position: {
        lat: number;
        lng: number;
    };
}

@Component({
    standalone: true,
    imports: [
        // Modules
        GoogleMapsModule,

        // Directives
        NgIf,
    ],
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss'],
})
export class MapComponent implements OnInit {
    static clientProviders = [provideHttpClient(withJsonpSupport())];
    static renderProviders = [MapComponent.clientProviders];

    public __mapMarker: IMapMarker = {
        position: {
            lat: 55.6784677,
            lng: 12.5688793,
        },
    };

    public apiLoaded: boolean = false;

    private readonly _googleMapService: GoogleMapsService = inject(GoogleMapsService);
    // private readonly httpClient = inject(HttpClient);

    public __todos: any


    public ngOnInit(

    ): void {

        this._googleMapService.obsCurrentApiStatus$
            .subscribe({
                next: (a: boolean) => {
                    console.log("api loaded", a);
                    this.apiLoaded = a;
                },
            });
    }
}
