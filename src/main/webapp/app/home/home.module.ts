import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MyfrontSharedModule } from 'app/shared/shared.module';
import { HOME_ROUTE } from './home.route';
import { HomeComponent } from './home.component';

@NgModule({
  imports: [MyfrontSharedModule, RouterModule.forChild([HOME_ROUTE])],
  declarations: [HomeComponent]
})
export class MyfrontHomeModule {}
