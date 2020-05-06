import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { AppComponent } from './app.component';
import { PipesComponent } from './pipes/pipes.component';
import { ReactWithRxjsComponent } from './react-with-rxjs/react-with-rxjs.component';
import { ReactFormsComponent } from './react-forms/react-forms.component';
import { ModelDrivenFormsComponent } from './model-driven-forms/model-driven-forms.component';
import { ModelDrivenFormsValidationComponent } from './model-driven-forms-validation/model-driven-forms-validation.component';
import { SubmitRestFormComponent } from './submit-rest-form/submit-rest-form.component';
import { HttpAPIComponent } from './http-api/http-api.component';
import { HttpexampleComponent } from './httpexample/httpexample.component';
import { DependencyInjectionProvidersComponent } from './dependency-injection-providers/dependency-injection-providers.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentsComponent } from './departments/departments.component';
import { DepartmentListComponent } from './department-list/department-list.component';
import { DepartmentOverviewComponent } from './department-overview/department-overview.component';
import { DepartmentContactComponent } from './department-contact/department-contact.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { CodecraftComponent } from './codecraft/codecraft.component';
import { QuickstartComponent } from './quickstart/quickstart.component';
import { Es6Component } from './es6/es6.component';
import { AngularCliComponent } from './angular-cli/angular-cli.component';
import { ComponentComponent } from './component/component.component';
import { BuiltInDirectivesComponent } from './built-in-directives/built-in-directives.component';
import { AdvancedTopicsComponent } from './advanced-topics/advanced-topics.component';


const routes: Routes = [
  {
    path:'',
    component:LoginComponent
    
  },
 
  {
    path:'navbar',
    component:NavbarComponent,
    canActivate :[AuthGuard] ,
    children:
    [
      
      {
        path:'codecraft',
        component:CodecraftComponent,
      },
      {
        path:'QuickStart',
        component:QuickstartComponent,
      },
      {
        path:'es6',
        component:Es6Component,
      },
      {
        path:'angularcli',
        component:AngularCliComponent,
      },
      {
        path:'components',
        component:ComponentComponent,
      },
      {
        path:'builtindirectives',
        component:BuiltInDirectivesComponent,
      },
      {
        path:'customdirectives',
        component:CustomDirectiveComponent,
      },
    
      {
        path:'pipes',
        component:PipesComponent
      },
      {
        path:'ReactWithRxjs',
        component:ReactWithRxjsComponent
      },
      {
        path:'ReactForms',
        component:ReactFormsComponent
      },
      {
        path:'ModelDrivenForms',
        component:ModelDrivenFormsComponent
      
      },
      {
        path:'ModelDrivenFormsValidation',
        component:ModelDrivenFormsValidationComponent
      },
      {
        path:'SubmitRestForm',
        component:SubmitRestFormComponent
      },
      {
        path:'HttpAPI',
        component:HttpAPIComponent
      },
      {
        path:'Httpexample',
        component:HttpexampleComponent
      },
      {
        path:'dip',
        component:DependencyInjectionProvidersComponent
      },
  
      {
        path:'about',
        component:AboutComponent
      },
    
     
      {
        path:'gallery',
        component:GalleryComponent
      },
      {
        path:'departments',
        component:DepartmentsComponent
      },
      {
        path:'departmentlist',
        component:DepartmentListComponent
      },
      {
        path:'departments/:id',
        component:DepartmentListComponent,
        children:
        [
          {
            path:'overview',
            component:DepartmentOverviewComponent
          },
          {
            path:'contact',
            component:DepartmentContactComponent
          }
    
        ]
      },
      {
        path:'photo',
        redirectTo:"gallery"
      },
      
      {
        path:'advancedtopics',
        component:AdvancedTopicsComponent,
      }

    
    ]   

    
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
