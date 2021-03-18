import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ApiService} from '../api/api.service';
import { Location } from '@angular/common'

@Component({
  selector: 'app-card-by-id',
  templateUrl: './card-by-id.component.html',
  styleUrls: ['./card-by-id.component.scss']
})
export class CardByIdComponent implements OnInit {
  id;
  card: any = {
    types: [],
    images: {
      large: ''
    }
  };
  loading = false;

  constructor(private actRoute: ActivatedRoute, private api: ApiService, private location: Location) {
    this.id = this.actRoute.snapshot.params.id;
  }

  ngOnInit(): void {
    this.loading = true;
    this.api.card(this.id).subscribe((res: any) => {
      this.card = res.data;
      this.loading = false;
    });
  }

  goToBack = () => {
    this.location.back();
  }

}
