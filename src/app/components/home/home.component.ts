import { Component, OnInit } from '@angular/core';
import { Transaction } from '../../interfaces/transaction';
import { DataService } from '../../services/data.service';
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
export class HomeComponent implements OnInit {
  selectedCustomerId: number = 0;
  transactions: Transaction[] = [];

  constructor(private _DataService: DataService) {}

  ngOnInit(): void {
    this.fetchTransactions();
  }

  fetchTransactions(): void {
    this._DataService.getTransactions().subscribe(
      (transactions: Transaction[]) => {
        this.transactions = transactions;
      },
      (error) => {
        console.error('Error fetching transactions:', error);
      }
    );
  }

  title = 'customer-transaction-app';
}
