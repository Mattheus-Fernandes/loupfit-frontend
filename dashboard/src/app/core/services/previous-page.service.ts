import { Location } from "@angular/common";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class PreviousPageService {

    constructor(private _location: Location){}

    previousPage(): void {
        this._location.back()
    }
}