import { Component } from '@angular/core';
import { IProduct } from '../service-model';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent {
  products = [] as IProduct[];

  constructor() {
    this.products = [
      {
        pid: 11,
        pName: 'Monitor',
        price: 32999,
        description:
          'LG Ultragear QHD Nano IPS (27 inches / 68.5 cm) 165 Hz, 180 Hz 1ms, Nvidia G-Sync Compatible, FreeSync Premium, VESA Display HDR 400, HDMI, Gaming Monitor 27GP850 2560 x 1440 Pixels, Black',
        imgUrl: 'https://m.media-amazon.com/images/I/617qn+Q2IdL._SL1500_.jpg',
      },
      {
        pid: 12,
        pName: 'Car',
        price: 978,
        description:
          "METRO TOY'S & GIFT Metal Lamborghini Centenario Lp 770-4 Model Car",
        imgUrl: 'https://m.media-amazon.com/images/I/61cVpXtoQiL._SL1500_.jpg',
      },
      {
        pid: 13,
        pName: 'Earbuds',
        price: 9999,
        description:
          'OnePlus Buds Pro 2R  Bluetooth Truly Wireless in Ear Earbuds Co-Created with Dynaudio,Up-to 45dB Adaptive Noise Cancellation,Dual Drivers,Up-to 40 Hrs Battery & Bluetooth 5.2v[Obsidian Black]',
        imgUrl: 'https://m.media-amazon.com/images/I/51G-nCt3mKL._SL1500_.jpg',
      },
      {
        pid: 14,
        pName: 'Sofa Set',
        price: 54880,
        description:
          'The Cozy Couch - Beetle Sectional/L Shape Sofa Set 5 Seater Interchangeable in Grey Colour for Living Room.',
        imgUrl: 'https://m.media-amazon.com/images/I/81FjmmpkGGL._SL1500_.jpg',
      },
      {
        pid: 15,
        pName: 'Air Fryer',
        price: 6999,
        description:
          'Xiaomi Smart Air Fryer | OLED Display | 90% Less Oil | 1500W | 8 preset modes | 6 in 1 Versatility - Grill, Bake, Fry, Roast, Defrost, Dehydrate | 40-200°C | Voice Assistant control | 90+ Smart Recipes',
        imgUrl: 'https://m.media-amazon.com/images/I/71jMZAsXbsL._SL1500_.jpg',
      },

      {
        pid: 16,
        pName: 'Fry pan',
        price: 1399,
        description:
          'Milton Pro Cook Induction Kitchen Jewel Set of 3 (Fry pan 24 cm/1.6 litres; Kadhai 24 cm/2.5 litres with Glass lid & Tawa 25 cm), Maroon | Dishwasher Safe | Hot Plate | Flame Safe | Non-Stick',
        imgUrl: 'https://m.media-amazon.com/images/I/71KXvw5EPPL._SL1500_.jpg',
      },
    ];
  }
}
