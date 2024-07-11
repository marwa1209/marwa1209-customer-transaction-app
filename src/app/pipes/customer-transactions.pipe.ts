import { Pipe, PipeTransform } from '@angular/core';
import { Transaction } from '../interfaces/transaction';

@Pipe({
  name: 'customerTransactions',
  standalone: true,
})
export class CustomerTransactionsPipe implements PipeTransform {
  transform(transactions: Transaction[], customerId: number): Transaction[] {
    if (!transactions || !customerId) {
      return [];
    }
    return transactions.filter((transaction) => transaction.customer_id == customerId
    );
  }
}
