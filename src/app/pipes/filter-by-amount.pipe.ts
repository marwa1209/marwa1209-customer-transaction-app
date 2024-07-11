import { Pipe, PipeTransform } from '@angular/core';
import { Transaction } from '../interfaces/transaction';
import type { Customer } from '../interfaces/customer';

@Pipe({
  name: 'filterByAmount',
  standalone: true,
})
export class FilterByAmountPipe implements PipeTransform {
  transform(
    customers: Customer[],
    transactions: Transaction[],
    amountFilter: number
  ): Customer[] {
    if (!customers || !transactions || !amountFilter) {
      return customers;
    }
    return customers.filter((customer) => {
      const hasMatchingTransaction = transactions.some(
        (transaction) =>
          transaction.customer_id == customer.id &&
          transaction.amount === amountFilter
      );

      return hasMatchingTransaction;
    });
  }
}
