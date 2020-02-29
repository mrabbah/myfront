import { NgModule } from '@angular/core';
import { MyfrontSharedLibsModule } from './shared-libs.module';
import { AlertComponent } from './alert/alert.component';
import { AlertErrorComponent } from './alert/alert-error.component';
import { HasAnyAuthorityDirective } from './auth/has-any-authority.directive';

@NgModule({
  imports: [MyfrontSharedLibsModule],
  declarations: [AlertComponent, AlertErrorComponent, HasAnyAuthorityDirective],
  exports: [MyfrontSharedLibsModule, AlertComponent, AlertErrorComponent, HasAnyAuthorityDirective]
})
export class MyfrontSharedModule {}
