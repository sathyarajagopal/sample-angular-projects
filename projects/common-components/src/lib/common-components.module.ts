import { NgModule } from '@angular/core';
import { CommonComponentsComponent } from './common-components.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { TextinputComponent } from './textinput/textinput.component';

@NgModule({
    declarations: [CommonComponentsComponent, CheckboxComponent, TextinputComponent],
    imports: [
    ],
    exports: [CommonComponentsComponent, CheckboxComponent, TextinputComponent]
})
export class CommonComponentsModule { }
