import { Component, OnInit } from '@angular/core';
import {ApiService} from '../api/api.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {
  termSearch = '';
  allCards: Array<any> = [];
  allTypes: Array<any> = [];
  loading = false;
  paginatePage = '1';
  active = 'Todos';

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.listAll();
    this.listTypes();
  }

  searchByTerm = () => {
    return this.allCards.filter(item => {
      return (
        item.name.toLowerCase().indexOf(this.termSearch.toLowerCase()) > -1 ||
        item.id.toLowerCase().indexOf(this.termSearch.toLowerCase()) > -1
      );
    });
  }

  listAll = () => {
    this.active = 'Todos';
    this.loading = true;

    this.api.card().subscribe((res: any) => {
      this.allCards = res.data;
      this.paginatePage = res.page;
      this.loading = false;
    });
  }

  listCardToType = (type: string = '') => {
    this.active = type;
    this.loading = true;

    this.api.card('', this.paginatePage, type.toLowerCase()).subscribe((res: any) => {
      this.allCards = res.data;
      this.paginatePage = res.page;
      this.loading = false;
    });
  }

  listTypes = () => {
    this.api.types().subscribe((res: any) => {
      this.allTypes = res.data;
    });
  }

  hasPrevButton = () => {
    return Number(this.paginatePage) <= 1;
  }

  paginatePrev = () => {
    this.loading = true;
    const newPage = Number(this.paginatePage) - 1;
    this.paginatePage = String(newPage);

    this.api.card('', this.paginatePage).subscribe((res: any) => {
      this.allCards = res.data;
      this.paginatePage = res.page;
      this.loading = false;
    });
  }

  paginateNext = () => {
    this.loading = true;
    const newPage = Number(this.paginatePage) + 1;
    this.paginatePage = String(newPage);

    this.api.card('', this.paginatePage).subscribe((res: any) => {
      this.allCards = res.data;
      this.paginatePage = res.page;
      this.loading = false;
    });
  }

}
