import { Component, ViewEncapsulation } from '@angular/core';
import { ColorPickerEventArgs, ColorPickerModule } from '@syncfusion/ej2-angular-inputs';
import { Browser } from '@syncfusion/ej2-base';
import { SBDescriptionComponent } from '../common/dp.component';
import { SBActionDescriptionComponent } from '../common/adp.component';

/**
 * Inline Mode sample
 */
@Component({
    selector: 'control-content',
    templateUrl: 'inline.html',
    styleUrls: ['inline.css'],
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [SBActionDescriptionComponent, ColorPickerModule, SBDescriptionComponent]
})
export class InlineColorPickerComponent {
    public ctrlSwitch: boolean = false;

    // function to handle the ColorPicker change event
    public change(args: ColorPickerEventArgs): void {
        document.getElementById('preview').style.backgroundColor = args.currentValue.hex;
    }

    ngOnInit(): void {
         // custom code start
        if (Browser.isDevice) {
            document.getElementById('inline-control').classList.add('e-mobile-control');
        }
        // custom code end
    }
}