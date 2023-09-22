import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../product';
import { FormsModule } from '@angular/forms';
import { NgIf, NgClass, NgFor } from '@angular/common';

@Component({
    templateUrl: './product-edit-tags.component.html',
    standalone: true,
    imports: [NgIf, FormsModule, NgClass, NgFor]
})
export class ProductEditTagsComponent implements OnInit {
  errorMessage = '';
  newTags = '';
  product? :Product;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route?.parent?.data.subscribe(data => {
      this.product = data['resolvedData'].product;
    });
  }

  // Add the defined tags
  addTags(): void {
    if (this.product) {
      if (!this.newTags) {
        this.errorMessage = 'Enter the search keywords separated by commas and then press Add';
      } else {
        const tagArray = this.newTags.split(',');
        this.product.tags = this.product.tags ? this.product.tags.concat(tagArray) : tagArray;
        this.newTags = '';
        this.errorMessage = '';
      }
    }
  }

  // Remove the tag from the array of tags.
  removeTag(idx: number): void {
    this.product?.tags?.splice(idx, 1);
  }
}
