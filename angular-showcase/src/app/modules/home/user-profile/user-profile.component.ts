import { Component, OnInit } from '@angular/core';
import { UserProfile } from '../../data-models/userProfile';
import { MusicApiService } from '../../../../services/music-api.service';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.css'
})
export class UserProfileComponent implements OnInit {
  userProfile: UserProfile = new UserProfile();

  ngOnInit(): void {
    this.musicApiService
      .getAccountDetails()
      .subscribe((accountDetails) => {
        this.userProfile = accountDetails;
      });
  }

  constructor(private musicApiService: MusicApiService) {  }
}
