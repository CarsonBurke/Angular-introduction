import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { DetailsComponent } from "./details/details.component";

const routeConfig: Routes = [
    {
        path: '',
        component: HomeComponent,
        title: "Homes | Home",
    },
    {
        path: 'details/:id',
        component: DetailsComponent,
        title: 'Home name | details',
    }
]

export default routeConfig;