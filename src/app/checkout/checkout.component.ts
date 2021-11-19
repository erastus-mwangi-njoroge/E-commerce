import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { switchMap } from 'rxjs/operators';

import { StripeService } from 'ngx-stripe';


@Component({
  selector: 'll-app-checkout',
  templateUrl: './checkout.component.html'
})
export class CheckoutComponent {
  constructor(
    private http: HttpClient,
    private stripeService: StripeService
  ) {}

  checkout(e): void {
    e.preventDefault();
    this.stripeService
      .createToken(e.target, { name: 'Name' })
      .subscribe(result => {
        if (result.token) {
          this.http
            .post('/api/charge', {
              token: result.token.id,
              amount: 1000
            })
            .subscribe(res => {
              console.log(res);
            });
        } else if (result.error) {
          console.log(result.error.message);
        }
      });
  }
  }

