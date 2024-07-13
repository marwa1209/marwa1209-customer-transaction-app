import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomerTransactionTableComponent } from './components/customer-transaction-table/customer-transaction-table.component';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CustomerTransactionTableComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'customer-transaction-app';
}
