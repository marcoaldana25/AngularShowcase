import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MusicApiService } from '../services/music-api.service';
import { UserProfile } from './modules/models/userProfile';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-showcase';

  userProfile: UserProfile = new UserProfile();

  constructor(private musicApiService: MusicApiService) {
    this.musicApiService
      .getAccountDetails()
      .subscribe((accountDetails) => {
        this.userProfile = accountDetails;
      });
  }
}
