import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FollowerComponent } from './follower/follower.component';
import { HomeComponent } from './home/home.component';
import { MyfollowerComponent } from './myfollower/myfollower.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { LaptopComponent } from './products/laptop/laptop.component';
import { MobileComponent } from './products/mobile/mobile.component';
import { ProductsComponent } from './products/products.component';
import { TelevisionComponent } from './products/television/television.component';
import { QueryparamComponent } from './queryparam/queryparam.component';

const routes: Routes = [
  // {
  //   path:'',component:HomeComponent
  // },
  {
    path:'',component:Page1Component
  },
  {
    path:'Page2',component:Page2Component
  },
  {
    path:'Page3',component:Page3Component
  },
  {
    path:'follower',component:FollowerComponent
  },
  {
    path:'Myfollower',component:MyfollowerComponent
  },
  {
    path:'queryparameter',component:QueryparamComponent
  },
  
  {
    path:'product',children:[
      {
        path:'',component:ProductsComponent
      },
      {
        path:'laptop',component:LaptopComponent
      },
      {
        path:'mobile',component:MobileComponent
      },
      {
        path:'tv',component:TelevisionComponent
      }
    ]
  },
  {
    path:'user',loadChildren:()=>import('./user/user.module').then(m=>m.UserModule)
  },
  {
    path:'**',component:NotfoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
