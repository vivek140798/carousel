import { Component } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-carousel';
  customOptions: OwlOptions = {
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      726: {
        items: 2
      },
      1280: {
        items: 3
      }
    },
    nav: true
  }
  reviews = [{
    rating: 1,
    review: 'My wife and I unequivocally recommend anyone interested in purchasing solar for their home to work through Electrum. Even if you are well informed about the options, your life will be made much easier',
    name: 'JOHN FREY',
    date: '2021-06-01'
  },
  {
    rating: 2,
    review: 'My wife and I unequivocally recommend anyone interested in purchasing solar for their home to work through Electrum. Even if you are well informed about the options, your life will be made much easier',
    name: 'JOHN two',
    date: '2021-06-01'
  },
  {
    rating: 3,
    review: 'My wife and I unequivocally recommend anyone interested in purchasing solar for their home to work through Electrum. Even if you are well informed about the options, your life will be made much easier',
    name: 'JOHN three',
    date: '2021-06-01'
  },
  {
    rating: 4,
    review: 'My wife and I unequivocally recommend anyone interested in purchasing solar for their home to work through Electrum. Even if you are well informed about the options, your life will be made much easier',
    name: 'JOHN four',
    date: '2021-06-01'
  },
  {
    rating: 5,
    review: 'My wife and I unequivocally recommend anyone interested in purchasing solar for their home to work through Electrum. Even if you are well informed about the options, your life will be made much easier',
    name: 'JOHN five',
    date: '2021-06-01'
  },
  {
    rating: 4,
    review: 'My wife and I unequivocally recommend anyone interested in purchasing solar for their home to work through Electrum. Even if you are well informed about the options, your life will be made much easier',
    name: 'JOHN six',
    date: '2021-06-01'
  },
  {
    rating: 3,
    review: 'My wife and I unequivocally recommend anyone interested in purchasing solar for their home to work through Electrum. Even if you are well informed about the options, your life will be made much easier',
    name: 'JOHN seven',
    date: '2021-06-01'
  }];
}
