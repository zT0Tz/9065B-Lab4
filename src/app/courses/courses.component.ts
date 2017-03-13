import { Component, OnInit } from '@angular/core';
import { CourseService} from '../course.service';
import { AutoGrowDirective} from '../auto-grow.directive';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers: [CourseService]

})

export class CoursesComponent implements OnInit{

    title = "The title of courses page";
    courses: string[];

    constructor(private courseService: CourseService) {
        this.courses = courseService.getCourses();
        

        // this.courseService.addCourse();
    }
    
    addCourse(course){
        console.log(course);
        this.courses.push(course);
    }
    
    ngOnInit() { }
  

   
}
