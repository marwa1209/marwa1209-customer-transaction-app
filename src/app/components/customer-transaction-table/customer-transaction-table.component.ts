import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { Customer } from '../../interfaces/customer';
import { Transaction } from '../../interfaces/transaction';
import { FormsModule } from '@angular/forms';
import { CustomerTransactionsPipe } from '../../pipes/customer-transactions.pipe';
import { FilterByAmountPipe } from '../../pipes/filter-by-amount.pipe';
import { filterByName } from '../../pipes/filter-by-name.pipe';
import { TransactionGraphComponent } from '../transaction-graph/transaction-graph.component';

@Component({
  selector: 'app-customer-transaction-table',
  standalone: true,
  imports: [
    CommonModule,
    CustomerTransactionsPipe,
    FormsModule,
    FilterByAmountPipe,
    filterByName,
    TransactionGraphComponent,
  ],
  templateUrl: './customer-transaction-table.component.html',
  styleUrl: './customer-transaction-table.component.scss',
})
export class CustomerTransactionTableComponent implements OnInit {
  customers: Customer[] = [];
  transactions: Transaction[] = [];
  nameFilter: string = '';
  amountFilter: any;
  selectedCustomer: number = 0;

  constructor(private _DataService: DataService) {}
  ngOnInit(): void {
    this.loadData();

  }
  loadData(): void {
    this._DataService.getCustomers().subscribe((customers) => {
      this.customers = customers;
    });

    this._DataService.getTransactions().subscribe((transactions) => {
      this.transactions = transactions;
    });
  }

  selectCustomer(customerId: number): void {
    this.selectedCustomer = Number(customerId);
  }

}
