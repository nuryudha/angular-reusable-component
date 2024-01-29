import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PassdataComponent } from './components/Elements/passdata/passdata.component';

const materialModule = [CommonModule];

const materialComponent = [PassdataComponent];

@NgModule({
  declarations: [materialComponent, PassdataComponent],
  imports: [materialModule],
  exports: [materialModule, materialComponent],
})
export class SharedModule {}
