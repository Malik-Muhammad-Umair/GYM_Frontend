import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-category',
  imports: [RouterLink],
  templateUrl: './category.html',
  styleUrl: './category.css'
})
export class Category {
plans = [
    {
      name: 'Basic',
      price: '$9',
      features: ['Access to gym', 'Locker facility', 'Free water bottle'],
      color: 'from-blue-400 to-blue-600'
    },
    {
      name: 'Standard',
      price: '$19',
      features: ['Everything in Basic', 'Personal trainer', 'Diet plan'],
      color: 'from-green-400 to-green-600'
    },
    {
      name: 'Premium',
      price: '$29',
      features: ['Everything in Standard', '24/7 Access', 'Priority support'],
      color: 'from-purple-400 to-purple-600'
    }
  ];
  
}
