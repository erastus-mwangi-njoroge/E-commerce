import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'll-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
  constructor(private productservice: ProductsService) {}

  ngOnInit(): void {}
  addlipanampesa(form: NgForm) {
    console.log(form.value);
    this.productservice.postlipanampesa(form.value).subscribe(res => {
      const phone_number = form.value.phone_number;
      const message =
        'Thank you for choosing one_click store.We have received your payment.Your products are being processed';

      const email = form.value.email;
      const subject = 'Payment Confirmation';

      this.productservice.postsendconfirmationemail(email, message, subject).subscribe(data => {
        console.log(data);
      });

      this.productservice.postsendconfirmationsms(phone_number, message).subscribe(data => {
        console.log(data);
      });

      console.log(res);
    });
    alert('Enter Your mpesa pin on your phone to confirm payment');
  }
}

function email(email: any, message: string) {
  throw new Error('Function not implemented.');
}
