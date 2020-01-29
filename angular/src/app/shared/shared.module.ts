import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormatGenderPipe } from './format-gender.pipe';
import { BarComponent } from './bar/bar.component';
import { HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    FormatGenderPipe,
    BarComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [ // Hacerlo visible a otros módulos.
    FormatGenderPipe,
    BarComponent,
    CommonModule,
    FormsModule,
    HttpClientModule
  ]
})
export class SharedModule { }
