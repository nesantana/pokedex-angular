import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {

  text;

  @Output() change: EventEmitter<any> = new EventEmitter();

  changeText = () => {
    this.change.emit(this.text);
  }

}
