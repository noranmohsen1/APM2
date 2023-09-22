import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgForm, FormsModule } from '@angular/forms';

import { Product } from '../product';
import { NgIf, NgClass } from '@angular/common';

@Component({
    templateUrl: './product-edit-info.component.html',
    standalone: true,
    imports: [NgIf, FormsModule, NgClass]
})
export class ProductEditInfoComponent implements OnInit {
  @ViewChild(NgForm) productForm?: NgForm;

  errorMessage = '';
  product? : Product;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.parent?.data.subscribe(data => {
      if (this.productForm) {
        this.productForm.reset();
      }
      this.product = data['resolvedData'].product;
    });
  }
}
