import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';
import { DxDataGridComponent } from 'devextreme-angular/ui/data-grid';
import { DxoHeaderFilterComponent } from 'devextreme-angular/ui/nested/header-filter';

import {
  Service,
  Employee,
  Statement,
  Group,
  Property,
  DataType,
  State,
} from './service.service';
@Component({
  styleUrls: ['app.component.css'],
  selector: 'demo-app',
  templateUrl: 'app.component.html',
})
export class AppComponent {
  @ViewChild(DxDataGridComponent) dataGrid: DxDataGridComponent;
  @ViewChild(DxoHeaderFilterComponent) headerFilter: DxoHeaderFilterComponent;
  @Output() filterName_EE: EventEmitter<any> = new EventEmitter();
  dataSource: Statement[];
  groups: Group[];
  properties: Property[];
  datatypes: DataType[];
  getfilterprops: any;
  getfilterdatatypes: any;
  setgroup: any;
  setproperty: any;
  objectsForGridTree: any;
  filteredDataTypes: Array<DataType> = new Array<DataType>();
  b_filter: boolean = false;

  constructor(service: Service) {
    this.dataSource = service.getstatements();
    this.groups = service.getgroups();
    this.properties = service.getproperties();
    this.datatypes = service.getdatatypes();
    let self = this;
    this.filteredDataTypes = this.datatypes;

    this.objectsForGridTree = this.getObjectsForGridTree();

    this.getfilterprops = function (options) {
      return {
        store: self.properties,
        filter: options.data ? ['GroupID', '=', options.data.GroupID] : null,
      };
    };

    this.getfilterdatatypes = function (options) {
      return {
        store: self.datatypes,
        // filter: options.data ? ["PropertyID", "=", options.data.PropertyID] : null
        filter: function (itemData) {
          return itemData.PropertyID == 2;
        },
      };
    };

    this.setgroup = function (rowData: any, value: any) {
      if (value) {
        rowData.PropertyID = null;
        rowData.DataTypeID = null;
        (<any>this).defaultSetCellValue(rowData, value);
      }
    };

    this.setproperty = function (rowData: any, value: any) {
      if (value) {
        rowData.DataTypeID = null;
        (<any>this).defaultSetCellValue(rowData, value);
      }
    };
  }

  async filterName() {
    //console.log(this.headerFilter);
    // if (this.b_filter === false) {
    //   console.log(await this.dataGrid.columns);
    //   this.filteredDataTypes = new Array<DataType>();
    //   this.filteredDataTypes.push(
    //     this.datatypes.find((x) => x.Name === 'dataType P1.1')
    //   );
    //   this.filterName_EE.emit(null);
    //   this.b_filter = true;
    //}
  }
  getPropertiesText(propertyIDs: number[]): string {
    return propertyIDs
      .map((propertyID) => this.properties.find((x) => x.ID === propertyID))
      .map((p) => p.Name)
      .join(', ');
  }

  getObjectsForGridTree() {
    return this.groups.map((group) => ({
      text: group.Name,
      value: group.ID,
      items: this.properties
        .filter((property) => property.GroupID === group.ID)
        .map((property) => ({
          text: property.Name,
          value: property.ID,
        })),
    }));
  }
}
