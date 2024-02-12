import { Component } from '@angular/core';
import { UserProfile } from '../../data-models/userProfile';
import { MusicApiService } from '../../../../services/music-api.service';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent {
  userProfile: UserProfile = new UserProfile();

  constructor(private musicApiService: MusicApiService) {
    this.musicApiService
      .getAccountDetails()
      .subscribe((accountDetails) => {
        this.userProfile = accountDetails;
      });
  }
}
