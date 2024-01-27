import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChineseNovelsComponent } from './views/chinese-novels/chinese-novels.component';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
