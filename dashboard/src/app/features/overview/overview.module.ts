import { NgModule } from "@angular/core";
import { OverviewComponent } from "./overview.component";
import { CommonModule } from "@angular/common";
import { OverviewRoutingModule } from "./overview-routing.module";
import { OverviewCardComponent } from './components/overview-card/overview-card.component';
import { SharedModule } from "src/app/shared/shared.module";

@NgModule({
    imports: [
    CommonModule,
    OverviewRoutingModule,
    SharedModule
],
    declarations: [
        OverviewComponent,
        OverviewCardComponent
    ],
})
export class OverviewModule { }