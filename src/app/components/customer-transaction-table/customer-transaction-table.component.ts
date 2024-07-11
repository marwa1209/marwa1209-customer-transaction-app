import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Customer } from '../../interfaces/customer';
import { Transaction } from '../../interfaces/transaction';
import { FilterByCustomerIdPipe } from '../../pipes/filter-by-customer-id.pipe';
@Component({
  selector: 'app-customer-transaction-table',
  standalone: true,
  imports: [CommonModule, FormsModule, FilterByCustomerIdPipe],
  templateUrl: './customer-transaction-table.component.html',
  styleUrl: './customer-transaction-table.component.scss',
})
export class CustomerTransactionTableComponent implements OnInit {
  customers: Customer[] = [];
  transactions: Transaction[] = [];
  constructor(private _DataService: DataService) {}
  ngOnInit(): void {
    this.loadCustomers();
    this.loadTransactions();
  }

  loadCustomers(): void {
    this._DataService.getCustomers().subscribe((customers) => {
      this.customers = customers;
    });
  }

  loadTransactions(): void {
    this._DataService.getTransactions().subscribe((transactions) => {
      this.transactions = transactions;
    });
  }
}
