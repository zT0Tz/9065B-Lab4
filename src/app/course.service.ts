import { Injectable } from '@angular/core';

@Injectable()
export class CourseService {

    constructor() { }
    
    getCourses() : string[]{
        return ["Course1", "Course2", "Course3"];
    };
    
    addCourse(course){
        console.log(course);
    //     //this.courses.push(course);
    };   
    

}
