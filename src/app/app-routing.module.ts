import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServiceComponent } from './service/service.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { RecruitComponent } from './recruit/recruit.component';
import { NewsComponent } from './news/news.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';

const routes: Routes = [
  { path: '', title: 'Giới thiệu', component: HomeComponent, pathMatch: 'full' },
  { path: 'home', title: 'Giới thiệu', component: HomeComponent},
  { path: 'service', title: 'Dịch vụ', component: ServiceComponent},
  { path: 'recruit', title: 'Tuyển dụng', component: RecruitComponent},
  { path: 'recruit/page/:id', title: 'Tuyển dụng', component: RecruitComponent},
  { path: 'schedule', title: 'Lịch học', component: ScheduleComponent},
  { path: 'schedule/page/:id', title: 'Lịch học', component: ScheduleComponent},
  { path: 'news', title: 'Tin tức', component: NewsComponent},
  { path: 'news/news-detail/:id', title: 'Tin tức chi tiết', component: NewsDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [
    HomeComponent,
    ServiceComponent,
    ScheduleComponent,
    RecruitComponent,
    NewsComponent,
]