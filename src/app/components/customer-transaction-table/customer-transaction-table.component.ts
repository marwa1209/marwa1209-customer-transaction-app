import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../services/data.service';
import { Customer } from '../../interfaces/customer';
import { Transaction } from '../../interfaces/transaction';
import { FormsModule } from '@angular/forms';
import { CustomerTransactionsPipe } from '../../pipes/customer-transactions.pipe';
@Component({
  selector: 'app-customer-transaction-table',
  standalone: true,
  imports: [CommonModule, CustomerTransactionsPipe, FormsModule],
  templateUrl: './customer-transaction-table.component.html',
  styleUrl: './customer-transaction-table.component.scss',
})
export class CustomerTransactionTableComponent implements OnInit {
  customers: Customer[] = [];
  transactions: Transaction[] = [];
  constructor(private _DataService: DataService) {}
  ngOnInit(): void {
    this.getCustomers();
    this.getTransactions();
  }

  getCustomers(): void {
    this._DataService.getCustomers().subscribe((customers) => {
      this.customers = customers;
    });
  }

  getTransactions(): void {
    this._DataService.getTransactions().subscribe((transactions) => {
      this.transactions = transactions;
    });
  }
}
