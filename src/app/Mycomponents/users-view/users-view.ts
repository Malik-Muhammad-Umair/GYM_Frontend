import { DatePipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users-view',
  imports: [DatePipe, NgIf, NgFor, RouterLink],
  templateUrl: './users-view.html',
  styleUrl: './users-view.css'
})
export class UsersView {
   username=localStorage.getItem("username");
 user = {
    id: 1,
    name: 'Umair',
    plan: 'Standard',
    planStart: new Date('2025-09-01'),
    planEnd: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000), // 15 days from now
    paidAmount: 50,
    planFee: 50,
    sessionsRemaining: 8,
    totalSessions: 12,
  };

  offers: Offer[] = [
    { id: 1, title: 'Free 1-on-1 Session', description: 'Book one free personal training session.', expires: new Date(Date.now() + 7 * 24 * 3600 * 1000) },
    { id: 2, title: 'Bring-a-Friend 50% Off', description: 'Invite a friend & they get 50% off first month.', expires: null },
  ];

  // Helper: remaining days (rounded down)
  get remainingDays(): number {
    const now = new Date();
    const diff = (this.user.planEnd.getTime() - now.getTime());
    return diff > 0 ? Math.floor(diff / (1000 * 60 * 60 * 24)) : 0;
  }

  // Fee due?
 
  // Sessions progress percent
  get sessionsProgress(): number {
    const used = this.user.totalSessions - this.user.sessionsRemaining;
    const pct = (used / this.user.totalSessions) * 100;
    return Math.min(100, Math.max(0, Math.round(pct)));
  }

  // Action handlers (replace with real logic / routing)
  payNow() {
    // replace with real payment flow
    alert('Redirecting to payment gateway (demo)...');
  }

  viewPlanDetails() {
    alert(`Plan: ${this.user.plan}\nStart: ${this.user.planStart.toDateString()}\nEnd: ${this.user.planEnd.toDateString()}`);
  }

  claimOffer(offer: Offer) {
    alert(`Offer claimed: ${offer.title} (demo)`);
  }
}
