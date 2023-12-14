import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {Book} from '../models/book';

const ELEMENT_DATA: Book[] = [
  new Book("title1", "author1", "description1"),
  new Book("title2", "author2", "description2"),
  new Book("title3", "author3", "description3"),
  new Book("title4", "author4", "description4"),
  new Book("title5", "author5", "description5"),
  new Book("title6", "author6", "description6"),
  new Book("title7", "author7", "description7"),
  new Book("title8", "author8", "description8"),
  new Book("title9", "author9", "description9"),
  new Book("title10", "author10", "description10"),
];

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatCardModule,],
  template: 
    `
    <mat-card>
      <mat-card-content>
        <table mat-table [dataSource]="dataSource" class="mat-elevation-z8">

          <!-- Note that these columns can be defined in any order.
            The actual rendered columns are set as a property on the row definition" -->

          <!-- Name Column -->
          <ng-container matColumnDef="title">
            <th mat-header-cell *matHeaderCellDef> Titolo </th>
            <td mat-cell *matCellDef="let element"> {{element.title}} </td>
          </ng-container>

          <!-- Weight Column -->
          <ng-container matColumnDef="author">
            <th mat-header-cell *matHeaderCellDef> Autore </th>
            <td mat-cell *matCellDef="let element"> {{element.author}} </td>
          </ng-container>

          <!-- Symbol Column -->
          <ng-container matColumnDef="description">
            <th mat-header-cell *matHeaderCellDef> Descrizione </th>
            <td mat-cell *matCellDef="let element"> {{element.description}} </td>
          </ng-container>

          <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
          <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>
        </table>
      </mat-card-content>
    </mat-card>
    `,
})
export class HomeComponent {

  displayedColumns: string[] = ['title', 'author', 'description'];
  dataSource = ELEMENT_DATA;

}
