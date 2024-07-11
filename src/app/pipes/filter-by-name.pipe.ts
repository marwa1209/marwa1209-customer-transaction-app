import { Pipe, PipeTransform } from '@angular/core';
import type { Customer } from '../interfaces/customer';
@Pipe({
  name: 'filterByName',
  standalone: true,
})
export class filterByName implements PipeTransform {
  transform(customers: Customer[], nameFilter: string): any {
    if (!customers || !nameFilter) {
      return customers;
    }

    nameFilter = nameFilter.toLowerCase().trim();

    return customers.filter((customer) =>
      customer.name.toLowerCase().includes(nameFilter)
    );
  }
}
