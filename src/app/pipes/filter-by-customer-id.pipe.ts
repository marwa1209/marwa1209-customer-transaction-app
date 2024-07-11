import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByCustomerId',
  standalone:true
})
export class FilterByCustomerIdPipe implements PipeTransform {
  transform(transactions: any[], customerId: number): any[] {
    if (!transactions || !customerId) {
      return transactions;
    }
    return transactions.filter(
      (transaction) => transaction.customer_id === customerId
    );
  }
}
