import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChineseNovelsComponent } from './views/chinese-novels/chinese-novels.component';
import { BookCoverComponent } from './components/book-cover/book-cover.component';


const routes: Routes = [
  {path: 'book', component: BookCoverComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
