import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { GridComponent, GridModule } from '@syncfusion/ej2-angular-grids';
import { employeeData } from './data';
import { Internationalization } from '@syncfusion/ej2-base';
import { SBDescriptionComponent } from '../common/dp.component';
import { SBActionDescriptionComponent } from '../common/adp.component';

let instance: Internationalization = new Internationalization();


@Component({
    selector: 'ej2-gridrowtemplate',
    templateUrl: 'row-template.html',
    styleUrls: ['row-template.style.css'],
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [SBActionDescriptionComponent, GridModule, SBDescriptionComponent]
})
export class RowTemplateComponent implements OnInit {
    public data: Object[];

    @ViewChild('grid')
    public grid: GridComponent;

    ngOnInit(): void {
        this.data = employeeData;
    }

    public format(value: Date): string {
        return instance.formatDate(value, { skeleton: 'yMd', type: 'date' });
    }
}

export interface DateFormat extends Window {
    format?: Function;
}