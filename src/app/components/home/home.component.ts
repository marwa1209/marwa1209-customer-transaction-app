import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionGraphComponent } from '../transaction-graph/transaction-graph.component';
import { CustomerTransactionTableComponent } from '../customer-transaction-table/customer-transaction-table.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    TransactionGraphComponent,
    CustomerTransactionTableComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent  {

  title = 'customer-transaction-app';
}
