import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CardComponent } from "./components/card/card.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";

const routes: Routes = [
    //#region
    // {
    //   path: 'profile',
    //   component: HomeProfileComponent,
    //   children: [
    //     { path: 'create', component: CreateSkillComponent },
    //     { path: 'edit/:id', component: CreateSkillComponent },
    //     { path: '', component: HomeProfileComponent }
    //   ]
    // },
    // { path: '', redirectTo: 'profile', pathMatch: 'full' },
    // { path: '', component: HomeProfileComponent },
    //#endregion
  { path: '**', component: NotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
