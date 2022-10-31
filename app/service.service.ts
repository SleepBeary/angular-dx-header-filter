import { Injectable } from '@angular/core';

export class Employee {
  ID: number;
  FirstName: string;
  LastName: string;
  Prefix: string;
  Position: string;
  Picture: string;
  BirthDate: string;
  HireDate: string;
  Notes: string;
  Address: string;
  StateID: number;
}

export class State {
  ID: number;
  Name: string;
}

export class Statement {
  ID: number;
  GroupID: number;
  Name: string;
  PropertyID: number;
  DataTypeID: number;
}

export class Group {
  ID: number;
  Name: string;
}

export class Property {
  ID: number;
  Name: string;
  GroupID: number;
}

export class DataType {
  ID: number;
  Name: string;
  PropertyIDs: number[];
}

let groups: Group[] = [
  {
    ID: 1,
    Name: 'First Group',
  },
  {
    ID: 2,
    Name: 'Second Group',
  },
  {
    ID: 3,
    Name: 'Third Group',
  },
  {
    ID: 4,
    Name: 'Fourth Group',
  },
];

let properties: Property[] = [
  {
    ID: 1,
    Name: 'Property G1.1',
    GroupID: 1,
  },
  {
    ID: 2,
    Name: 'Property G1.2',
    GroupID: 1,
  },
  {
    ID: 3,
    Name: 'Property G1.3',
    GroupID: 1,
  },
  {
    ID: 4,
    Name: 'Property G2.1',
    GroupID: 2,
  },
  {
    ID: 5,
    Name: 'Property G2.2',
    GroupID: 2,
  },
  {
    ID: 6,
    Name: 'Property G3.1',
    GroupID: 3,
  },
  {
    ID: 7,
    Name: 'Property G3.2',
    GroupID: 3,
  },
  {
    ID: 8,
    Name: 'Property G3.3',
    GroupID: 3,
  },
  {
    ID: 9,
    Name: 'Property G4.1',
    GroupID: 4,
  },
  {
    ID: 10,
    Name: 'Property G4.2',
    GroupID: 4,
  },
];

let datatypes: DataType[] = [
  {
    ID: 1,
    Name: 'DataType P1.1',
    PropertyIDs: [1],
  },
  {
    ID: 2,
    Name: 'dataType P1.1',
    PropertyIDs: [1, 3],
  },
  {
    ID: 3,
    Name: 'DataType P1.3',
    PropertyIDs: [1, 2],
  },

  {
    ID: 4,
    Name: 'DataType P2.1',
    PropertyIDs: [2, 3],
  },
  {
    ID: 5,
    Name: 'DataType P2.2',
    PropertyIDs: [2, 1],
  },
  {
    ID: 6,
    Name: 'DataType P2.3',
    PropertyIDs: [2],
  },

  {
    ID: 7,
    Name: 'DataType P3.1',
    PropertyIDs: [3, 1, 2],
  },
  {
    ID: 8,
    Name: 'DataType P3.2',
    PropertyIDs: [3],
  },
];

let statements: Statement[] = [
  {
    ID: 1,
    Name: 'First Stmt',
    GroupID: 2,
    PropertyIDs: 5,
    DataTypeID: 15,
  },
  {
    ID: 2,
    Name: 'Second Stmt',
    GroupID: 4,
    PropertyIDs: 10,
    DataTypeID: 29,
  },
  {
    ID: 3,
    Name: 'Third Stmt',
    GroupID: 2,
    PropertyIDs: 4,
    DataTypeID: 11,
  },
];

@Injectable()
export class Service {
  getstatements() {
    return statements;
  }

  getgroups() {
    return groups;
  }

  getproperties() {
    return properties;
  }

  getdatatypes() {
    return datatypes;
  }
}
