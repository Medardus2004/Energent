import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngebotComponent } from './angebot/angebot.component';
import { AngebotDetailComponent } from './angebot-detail/angebot-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EnergentComponent} from "./energent/energent.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: AngebotDetailComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'energent', component: EnergentComponent },
  { path: 'angebot', component: AngebotComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
