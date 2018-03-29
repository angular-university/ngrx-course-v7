import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {MatCardModule} from "@angular/material/card";
import {MatInputModule} from "@angular/material";
import {RouterModule} from "@angular/router";
import {CourseResolver} from "../courses/services/course.resolver";
import {CoursesModule} from "../courses/courses.module";
import {CoursesService} from "../courses/services/courses.service";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatCardModule,
        MatInputModule,
        RouterModule.forChild([{path: '', component: LoginComponent}])
    ],
    declarations: [LoginComponent],
    exports: [LoginComponent]
})
export class AuthModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: AuthModule,
            providers: []
        }
    }
}
