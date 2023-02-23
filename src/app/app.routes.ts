import { Routes } from "@angular/router";
import { HomeComponent } from "./views/home/home.component";
import { CoursesComponent } from "./views/courses/courses.component";

export const APP_ROUTES: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "courses",
    component: CoursesComponent,
  },
  {
    path: "Components",
    component: HomeComponent,
  },
  {
    path: "Directives",
    component: CoursesComponent,
  },
  {
    path: "Pipes",
    component: HomeComponent,
  },
  {
    path: "Services",
    component: CoursesComponent,
  },
  {
    path: "Other",
    component: HomeComponent,
  },
  {
    path: "",
    component: CoursesComponent,
  },
];
