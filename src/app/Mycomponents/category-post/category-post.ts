import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-category-post',
  imports: [FormsModule],
  templateUrl: './category-post.html',
  styleUrl: './category-post.css'
})
export class CategoryPost {
  enrollment :any= {
    name: '',
    startDate: '',
    endDate: '',
    planType: '',
    
  };
  amount=0;
 change(){

    if(this.enrollment.planType==="Basic"){
      this.amount=2000;
    }
    else if(this.enrollment.planType==="Standard"){
      this.amount=3000;
    }
    else if(this.enrollment.planType==="Premium"){
      this.amount=5000;
    }
    else{
        this.amount=0;
    }
  }

  onSubmit() {
    if (this.enrollment.name && this.enrollment.startDate && this.enrollment.endDate && this.enrollment.planType) {
      // Save locally for now
      localStorage.setItem('enrollment', JSON.stringify(this.enrollment));
      alert(`✅ Successfully Enrolled in ${this.enrollment.planType} plan!`);
    } else {
      alert('⚠️ Please fill all fields before submitting!');
    }
  }
}
