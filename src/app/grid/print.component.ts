import { Component, OnInit } from '@angular/core';
import { hierarchyOrderdata, customerData, employeeData } from './data';
import { GridModel, HierarchyGridPrintMode, DetailRowService, SortService, GridModule, ToolbarService } from '@syncfusion/ej2-angular-grids';
import { removeClass, addClass } from '@syncfusion/ej2-base';
import { SBDescriptionComponent } from '../common/dp.component';
import { SBActionDescriptionComponent } from '../common/adp.component';
import { ToolbarModule } from '@syncfusion/ej2-angular-navigations';

@Component({
    selector: 'ej2-grid-hierarchyprint',
    templateUrl: 'print.html',
    styleUrls: ['./grid-lines.style.css'],
    providers: [DetailRowService, SortService, ToolbarService],
    standalone: true,
    imports: [ToolbarModule, GridModule, SBActionDescriptionComponent, SBDescriptionComponent]
})
export class PrintComponent implements OnInit {
    public data: Object[] = [];
    public childGrid: GridModel;
    public hierarchyPrintMode: HierarchyGridPrintMode;
    public toolbar: string[];

    ngOnInit(): void {
        this.data = employeeData;
        this.hierarchyPrintMode = "All";
        this.toolbar = ["Print"];
        this.childGrid = {
            dataSource: hierarchyOrderdata,
            queryString: 'EmployeeID',
            hierarchyPrintMode: "All",
            columns: [
                { field: 'OrderID', headerText: 'Order ID', textAlign: 'Right', width: 120 },
                { field: 'ShipCity', headerText: 'Ship City', width: 120 },
                { field: 'Freight', headerText: 'Freight', width: 120, format: 'C2', textAlign: 'Right' },
                { field: 'ShipName', headerText: 'Ship Name', width: 150 }
            ],
            childGrid: {
                dataSource: customerData,
                queryString: 'CustomerID',
                columns: [
                    { field: 'CustomerID', headerText: 'Customer ID', width: 75 },
                    { field: 'ContactName', headerText: 'Name', width: 100 },
                    { field: 'Address', headerText: 'Address', width: 120 },
                    { field: 'Country', headerText: 'Country', width: 100 }
                ]
            }
        };
    }
    public onClicked(e: HTMLElement): void {
        let element: HTMLElement = e;

        if (!element.classList.contains('e-tbar-btn-text') && !element.classList.contains('e-tbar-btn')) {
            return;
        }

        element = <HTMLElement>(element.tagName === 'BUTTON' ? element.firstElementChild : element);
        removeClass([].slice.apply(document.getElementsByClassName('e-ghidden')), 'e-ghidden');
        addClass([element.parentElement.parentElement], 'e-ghidden');
        this.hierarchyPrintMode = this.childGrid.hierarchyPrintMode = <HierarchyGridPrintMode>element.innerHTML;
    }
}