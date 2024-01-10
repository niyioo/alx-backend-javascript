/// <reference path="./crud.d.ts" />

// Import the rowID type and rowElement from interface.ts
import { RowID, RowElement } from './interface';
// Import everything from crud.js as CRUD
import * as CRUD from 'crud.js';

// Create an object called row with the type RowElement
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// Create a const variable named newRowID with the type RowID
const newRowID: RowID = CRUD.insertRow(row);

// Create a const variable named updatedRow with the type RowElement
const updatedRow: RowElement = { ...row, age: 23 };

// Call the updateRow and deleteRow commands
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);
