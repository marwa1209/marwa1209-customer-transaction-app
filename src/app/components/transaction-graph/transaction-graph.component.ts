import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  type AfterViewInit,
} from '@angular/core';
import { Chart, registerables } from 'chart.js';
import type { Transaction } from '../../interfaces/transaction';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-transaction-graph',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './transaction-graph.component.html',
  styleUrl: './transaction-graph.component.scss',
})
export class TransactionGraphComponent implements OnChanges, AfterViewInit {
  @Input() transactions: Transaction[] = [];
  @Input() customerId: number = 0;

  chart: any;

  constructor() {
    Chart.register(...registerables);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['customerId'] || changes['transactions']) {
      this.createChart();
    }
  }

  ngAfterViewInit() {
    if (this.transactions.length > 0 && this.customerId > 0) {
      this.createChart();
    }
  }
  createChart(): void {
    const customerTransactions = this.transactions.filter(
      (t) => t.customer_id == this.customerId
    );
    if (customerTransactions.length == 0) {
      console.warn(
        `No transactions found for customer with ID: ${this.customerId}`
      );
      return;
    }
    const groupedTransactions = this.groupByDate(customerTransactions);
    const dates = Object.keys(groupedTransactions);
    const amounts = Object.values(groupedTransactions);
    if (this.chart) {
      this.chart.destroy();
    }
    this.chart = new Chart('customerTransactionChart', {
      type: 'bar',
      data: {
        labels: dates,
        datasets: [
          {
            label: 'Total Transaction Amount',
            data: amounts,
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
            barThickness: 100,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }

  groupByDate(transactions: Transaction[]): { [key: string]: number } {
    return transactions.reduce(
      (acc: { [key: string]: number }, transaction: Transaction) => {
        const date = transaction.date;
        acc[date] = (acc[date] || 0) + transaction.amount;
        return acc;
      },
      {}
    );
  }
}
