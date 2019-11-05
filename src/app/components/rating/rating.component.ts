import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})

// Component used to improve reuse of external rating component
export class RatingComponent {

  @Input () ratingValue: number;

}
