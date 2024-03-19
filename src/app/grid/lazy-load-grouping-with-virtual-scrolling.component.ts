import { Component, OnInit, ViewChild } from '@angular/core';
import { LazyLoadGroupService, GridComponent, VirtualScrollService, SortService, GridModule, GroupService } from '@syncfusion/ej2-angular-grids';
import { createLazyLoadData, lazyLoadData } from './data';
import { SBDescriptionComponent } from '../common/dp.component';
import { SBActionDescriptionComponent } from '../common/adp.component';

@Component({
    selector: '',
    templateUrl: 'lazy-load-grouping-with-virtual-scrolling.html',
    providers: [LazyLoadGroupService, VirtualScrollService, SortService, GroupService],
    standalone: true,
    imports: [SBActionDescriptionComponent, GridModule, SBDescriptionComponent]
})
export class LazyLoadGroupingWithVirtualScrollingComponent implements OnInit {
    public lazyLoadData: Object[] = lazyLoadData;
    @ViewChild('grid')
    public grid: GridComponent;
    public groupSettings: object = { enableLazyLoading: true, columns: ['ProductName', 'CustomerName'] };
    public ngOnInit(): void {
        /* create lazyLoadData */
        createLazyLoadData();
    }
}