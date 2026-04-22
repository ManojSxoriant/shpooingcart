import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCartItems } from '../../store/cart.selectors';
import { Products } from '../../models/product.model';
import { CartState } from '../../store/cart.reducer';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {
  @Output() cartClose = new EventEmitter<void>();
  cartItems$!:Observable<any>;

  constructor(private store:Store<{cart:CartState}>) {
    this.cartItems$ = store.select(selectCartItems);
  }



}
