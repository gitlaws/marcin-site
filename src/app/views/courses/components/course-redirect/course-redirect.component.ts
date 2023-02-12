import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CouponCodeService } from "../../services/coupon-code/coupon-code.service";

@Component({
  selector: "app-course-redirect",
  templateUrl: "./course-redirect.component.html",
  styleUrls: ["./course-redirect.component.scss"],
})
export class CourseRedirectComponent {
  public courses: {
    courseKey: string;
    urlTitle: string;
    thumbnailUrl: string;
  }[] = [];

  constructor(
    private route: ActivatedRoute // private couponCodeService: CouponCodeService
  ) {
    this.courses = [
      {
        courseKey: "100-angular",
        urlTitle: "100-angular-challenge",
        thumbnailUrl: "/assets/100-angular.jpg",
      },
      {
        courseKey: "fe-interview",
        urlTitle: "100-front-end-interview-questions-challenge",
        thumbnailUrl: "/assets/front-end-course.jpg",
      },
      {
        courseKey: "100-algorithms",
        urlTitle: "100-algorithms-challenge",
        thumbnailUrl: "/assets/100-algorithms.jpg",
      },
      {
        courseKey: "javascript",
        urlTitle: "javascript-360",
        thumbnailUrl: "/assets/javascript-course.jpg",
      },
    ];
  }

  // public ngOnInit() {
  //   this.init();
  // }

  // private init() {
  //   this.route.root.queryParams.subscribe((params) => {
  //     const courseQueryString = params.course;

  //     if (courseQueryString) {
  //       this.redirectIfValidCourse(courseQueryString);
  //     }
  //   });
  // }

  // public redirectIfValidCourse(courseQueryString: string): void {
  //   for (const course of this.couponCodeService.courses) {
  //     if (course.courseKey === courseQueryString) {
  //       this.redirectByCourse(course);
  //       break;
  //     }
  //   }
  // }

  // private redirectByCourse(course: {
  //   courseKey: string;
  //   urlTitle: string;
  //   url?: string;
  // }) {
  //   window.location.href = course.url;
  // }
}
