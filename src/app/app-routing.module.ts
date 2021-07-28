import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RootComponent } from './root/root.component';
import { TableComponent } from './table/table.component';
import { TestspecsComponent } from './testspecs/testspecs.component';

const routes: Routes = [
    { path: '', component: RootComponent},
    { path: 'specs', component: TestspecsComponent},
    { path: 'table', component: TableComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
