import { Component } from '@angular/core';
import { SBDescriptionComponent } from '../common/dp.component';
import { SBActionDescriptionComponent } from '../common/adp.component';
import { NumericTextBoxModule } from '@syncfusion/ej2-angular-inputs';

@Component({
    selector: 'control-content',
    templateUrl: 'restrict-decimals.html',
    standalone: true,
    imports: [
        NumericTextBoxModule,
        SBActionDescriptionComponent,
        SBDescriptionComponent,
    ],
})
export class RestrictTextboxController {
    constructor() { }
}