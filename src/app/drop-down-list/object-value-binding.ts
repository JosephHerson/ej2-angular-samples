/**
 * DropDownList Default functionality Sample
 */
import { Component, ViewChild } from '@angular/core';
import { DropDownListComponent, DropDownListModule } from '@syncfusion/ej2-angular-dropdowns';
import { SBDescriptionComponent } from '../common/dp.component';
import { SBActionDescriptionComponent } from '../common/adp.component';
@Component({
    selector: 'control-content',
    templateUrl: 'object-value-binding.html',
    styleUrls: ['object-value-binding.css'],
    standalone: true,
    imports: [SBActionDescriptionComponent, DropDownListModule, SBDescriptionComponent]
})
export class ObjectDropDownListComponent {
    @ViewChild('sample')
    public listObj: DropDownListComponent;
    public records: { [key: string]: Object }[] = [];
    constructor() {
        for (let i = 1; i <= 150; i++) {
            let item: { [key: string]: Object } = {};
            item.id = 'id' + i;
            item.text = `Item ${i}`;
        
            // Generate a random number between 1 and 4 to determine the group
            const randomGroup = Math.floor(Math.random() * 4) + 1;
            switch (randomGroup) {
                case 1:
                    item.group = 'Group A';
                    break;
                case 2:
                    item.group = 'Group B';
                    break;
                case 3:
                    item.group = 'Group C';
                    break;
                case 4:
                    item.group = 'Group D';
                    break;
                default:
                    break;
            }
            this.records.push(item);
        }
    }
    // maps the appropriate column to fields property
    public fields: Object = { text: 'text', value: 'id' };
    // set the height of the popup element
    public height: string = '220px';
    // set the placeholder to DropDownList input element
    public waterMark: string = 'Select a Item';
    
    public onChange(args: any): void {
        let value: Element = document.getElementById('value');
        value.innerHTML = "Selected value : " + JSON.stringify(this.listObj.value);
    }
    ngAfterViewInit(e: any): void {
        // call the change event's function after initialized the component.
        setTimeout(()=>
      {
        this.onChange(e);
     })
    }
}