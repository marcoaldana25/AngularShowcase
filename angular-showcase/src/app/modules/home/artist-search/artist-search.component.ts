import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MusicApiService } from '../../../../services/music-api.service';

@Component({
  selector: 'artist-search',
  templateUrl: './artist-search.component.html',
  styleUrl: './artist-search.component.css'
})
export class ArtistSearchComponent implements OnInit {
  formGroup = new FormGroup({
    artistSearch: new FormControl(undefined, [Validators.required]),
    marketCode: new FormControl(undefined, [Validators.required]),
    limit: new FormControl(undefined, [Validators.required])
  })

  constructor(private formBuilder: FormBuilder, private musicApiService: MusicApiService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.formGroup.markAllAsTouched();

    this.musicApiService
      .getArtistSearch(this.artistSearch?.getRawValue(), this.marketCode?.getRawValue(), this.limit?.getRawValue())
      .subscribe((searchResult) => {
        console.log(searchResult);
      });
  }

  get artistSearch() {
    return this.formGroup.get('artistSearch');
  }

  get marketCode() {
    return this.formGroup.get('marketCode');
  }

  get limit() {
    return this.formGroup.get('limit');
  }
}
