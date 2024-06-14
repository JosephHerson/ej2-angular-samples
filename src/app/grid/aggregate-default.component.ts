import { Component, OnInit } from '@angular/core';
import { orderData } from './data';
import { AggregateService, SortService, FilterService, ToolbarService, EditService, GridModule, PageService } from '@syncfusion/ej2-angular-grids';
import { SBDescriptionComponent } from '../common/dp.component';
import { SBActionDescriptionComponent } from '../common/adp.component';

@Component({
    selector: 'ej2-gridaggregate',
    templateUrl: 'aggregate-default.html',
    providers: [AggregateService, SortService, PageService, FilterService, ToolbarService, EditService],
    standalone: true,
    imports: [GridModule, SBActionDescriptionComponent, SBDescriptionComponent]
})
export class AggregateComponent implements OnInit {
    public data: Object[];
    public pageOption: Object = {pageCount: 5};
    public filterSettings: Object;
    public toolbar: string[];
    public editSettings: Object;
    public orderidrules: Object;
    public customeridrules: Object;
    public freightrules: Object;
    public ngOnInit(): void {
        this.data = orderData;
        this.filterSettings = { type: 'Excel' };
        this.toolbar = ['Add', 'Edit', 'Delete', 'Update', 'Cancel'];
        this.editSettings = { allowEditing: true, allowAdding: true, allowDeleting: true };
        this.orderidrules = { required: true, number: true };
        this.customeridrules = { required: true, minLength: 5 };
        this.freightrules = { required: true, min: 0 };
    }
}