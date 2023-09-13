import { Component, OnInit, Inject,  } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor( @Inject(DOCUMENT) private document: any ) { }

  selectAppOpt( option: string ) {
    console.log(option);
    this.document.location.href = '../' + option;
  }

  ngOnInit(): void {
  }
}
