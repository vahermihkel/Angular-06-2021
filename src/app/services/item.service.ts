import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from '../models/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private items: Item[] = [];
  //private items = [{ "imgSrc": "https://i.ebayimg.com/thumbs/images/g/~0YAAOSwXKNdOCNY/s-l225.webp", "title": "Aluminium HD Polarized Photochromic Sunglasses Men Driving Chameleon Sun Glasses", "price": 11000000.99, "category": "sunglasses" }, { "imgSrc": "https://i.ebayimg.com/thumbs/images/g/OOYAAOSwZH5gPaUm/s-l225.webp", "title": "KDEAM Classic Men Polarized Sunglasses Strengthen TAC Mirror Anti-Glare UV400 ", "price": 13.79, "category": "sunglasses" }, { "imgSrc": "https://i.ebayimg.com/thumbs/images/g/wTQAAOSwJAJgVml7/s-l225.webp", "title": "SUNGLASSES Mens Mirrored Mens Womens UV400 New Lens Frame Color Retro Vintage", "price": 10.69, "category": "sunglasses" }, { "imgSrc": "https://i.ebayimg.com/thumbs/images/g/VU4AAOSws85gfMFs/s-l225.webp", "title": "Retro Square Frame Sunglasses Mens Womens Flat Top Square Super Dark Lens", "price": 12.99, "category": "sunglasses" }, { "imgSrc": "https://i.ebayimg.com/thumbs/images/g/gksAAOSw6IJdoDH~/s-l225.webp", "title": "Aluminium HD Polarized Photochromic Sunglasses Pilot Men Driving Glasses Eyewear", "price": 11.99, "category": "sunglasses" }, { "imgSrc": "https://i.ebayimg.com/thumbs/images/g/~lQAAOSwg6pglKOo/s-l225.webp", "title": "Sport Polarized Cycling Sunglasses for Men Women Outdoor Driving Fishing Glasses", "price": 10.66, "category": "sunglasses" }, { "imgSrc": "https://i.ebayimg.com/thumbs/images/g/sXsAAOSwdF9gyuz7/s-l225.webp", "title": "Aluminium Polarized Photochromic Sunglasses Mens Chameleon Driving Sport Glasses", "price": 9.99, "category": "sunglasses" }, { "imgSrc": "https://i.ebayimg.com/thumbs/images/g/qfYAAOSwAY9gb5qW/s-l225.webp", "title": "New Oakley Valve Sunglasses Polished Black Deep Blue Iridium Polarized OO9236-12", "price": 61.09, "category": "sunglasses" }, { "imgSrc": "https://i.ebayimg.com/thumbs/images/g/wMwAAOSw6g5fGhKb/s-l225.webp", "title": "New Oakley Valve sunglasses Grey Black Iridium Polarized OO9236-06 Authentic", "price": 61.09, "category": "sunglasses" }, { "imgSrc": "https://i.ebayimg.com/thumbs/images/g/xLwAAOSwvB5goiqN/s-l225.webp", "title": "Sports Polarized Sunglasses for Men Women Driving Fishing Cycling Glasses UV400", "price": 9.74, "category": "sunglasses" }, { "imgSrc": "https://i.ebayimg.com/thumbs/images/g/1I0AAOSwhEdc~RRn/s-l225.webp", "title": "Top SPY1 22COLOR Ken Block Classic Cycling Sports Retro Sunglasses UV400 Eyewear", "price": 2.78, "category": "sunglasses" }, { "imgSrc": "https://i.ebayimg.com/thumbs/images/g/1CUAAOSwGkZZc4EY/s-l225.webp", "title": "Sunglasses Driving Sport Outdoor Sports Fishing Eyewear Mens Women's 19 Color", "price": 4.85, "category": "sunglasses" }, { "imgSrc": "https://i.ebayimg.com/thumbs/images/g/acYAAOSwotlcdAOf/s-l225.webp", "title": "Polarized sunglasses, retro HD uv 400 + case, sunglasses, watch.", "price": 12.99, "category": "sunglasses" }, { "imgSrc": "https://i.ebayimg.com/thumbs/images/g/zKIAAOSw7ApdNW8w/s-l225.webp", "title": "Aluminum Polarized Photochromic Sunglasses Men Chameleon Driving Sports Glasses", "price": 13.99, "category": "sunglasses" }, { "imgSrc": "https://i.ebayimg.com/thumbs/images/g/KbIAAOSwQHBgujXZ/s-l225.webp", "title": "HD Polarized Photochromic Sunglasses Men Pilot Driving Sports Chameleon Eyewear", "price": 11.99, "category": "sunglasses" }, { "imgSrc": "https://i.ebayimg.com/thumbs/images/g/VNcAAOSwwI1glkI4/s-l225.webp", "title": "PARANOID Polarized Sports Sunglasses Men Women TAC HD Lens Driving Glasses UV400", "price": 10.57, "category": "sunglasses" }, { "imgSrc": "https://i.ebayimg.com/thumbs/images/g/RD0AAOSw6n5XuIHU/s-l225.webp", "title": "Night Day Vision Driving Polarized Lens Frame Sunglasses Glasses ", "price": 5.52, "category": "sunglasses" }, { "imgSrc": "https://i.ebayimg.com/thumbs/images/g/HocAAOSwSmxeXlxq/s-l225.webp", "title": "Hot SPY15 Retro Ken Block Classic Sport Cycling Sunglasses UV400 Fishing Glasses", "price": 2.78, "category": "sunglasses" }, { "imgSrc": "https://i.ebayimg.com/thumbs/images/g/7t0AAOSwCdtg2xBL/s-l225.webp", "title": "HD Polarized Photochromic Sunglasses Men Chameleon Classic Sport Driving Eyewear", "price": 11.99, "category": "sunglasses" }, { "imgSrc": "https://i.ebayimg.com/thumbs/images/g/AtIAAOSwS5ReD6WN/s-l225.webp", "title": "Kurt Cobain clout goggles oval sunglasses - Various Colours", "price": 8.29, "category": "sunglasses" }, { "imgSrc": "https://i.ebayimg.com/thumbs/images/g/nTMAAOSwf-tapv4C/s-l225.webp", "title": "Polarized Sunglasses, okulary HD, UV 400 Case, Sunglasses, sonnenbrillen", "price": 15.36, "category": "sunglasses" }, { "imgSrc": "https://i.ebayimg.com/thumbs/images/g/9wUAAOSw215g3I0~/s-l225.webp", "title": "Ray-Ban RB2140 50-22 Men's Sunglasses Gloss Black Frame 1", "price": 1.37, "category": "sunglasses" }, { "imgSrc": "https://i.ebayimg.com/thumbs/images/g/1I0AAOSwhEdc~RRn/s-l225.webp", "title": "HOT SPY1 22COLOR Ken Block Classic Cycling Sports Retro Sunglasses UV400 Eyewear", "price": 2.99, "category": "sunglasses" }, { "imgSrc": "https://i.ebayimg.com/thumbs/images/g/9WUAAOSwey9g3iFh/s-l225.webp", "title": "Sunglasses Men Glass Lens with box American Optical driving Silver Gray", "price": 13.9, "category": "sunglasses" }, { "imgSrc": "https://i.ebayimg.com/thumbs/images/g/JeYAAOSwyHZg2DfB/s-l225.webp", "title": "Retrosuperfuture Sunglasses 9I2 America Refined  black Black brown Unisex", "price": 164.07, "category": "sunglasses" }, { "imgSrc": "https://i.ebayimg.com/thumbs/images/g/LSoAAOSw0FFg29~W/s-l225.webp", "title": "Top SPY1 22COLOR Ken Block Classic Cycling Sports Retro Sunglasses UV400 Eyewear", "price": 2.02, "category": "sunglasses" }, { "imgSrc": "https://i.ebayimg.com/thumbs/images/g/jKIAAOSwU8hY8YDX/s-l225.webp", "title": "XL  \"Posche\" OVERSIZED Women Sunglasses Aviator Flat Top Square Shadz HOT DATE", "price": 13.99, "category": "sunglasses" }, { "imgSrc": "https://i.ebayimg.com/thumbs/images/g/GtMAAOSw7fJgUFzK/s-l225.webp", "title": "Photochromic Polarised Clip On Flip Sunglasses UV400 Polarized Fishing Eyewear", "price": 8.98, "category": "sunglasses" }, { "imgSrc": "https://i.ebayimg.com/thumbs/images/g/EHEAAOSw1kxgtefM/s-l225.webp", "title": "sports sunglasses", "price": 7.61, "category": "sunglasses" }, { "imgSrc": "https://i.ebayimg.com/thumbs/images/g/dtEAAOSw1ABdoBgy/s-l225.webp", "title": "Kurt Cobain clout goggles oval sunglasses Various Colours Retro Goggles Shades", "price": 3.16, "category": "sunglasses" }, { "imgSrc": "https://i.ebayimg.com/thumbs/images/g/vecAAOSwlHdfkxol/s-l225.webp", "title": "Sunglasses  Photochromic Polarized Lens Clip on Flip up Myopia Eyewear Outdoor", "price": 17.7, "category": "sunglasses" }, { "imgSrc": "https://i.ebayimg.com/thumbs/images/g/SkQAAOSwsFVaqFDZ/s-l225.webp", "title": "Polarized sunglasses, Aimi Blue HD, uv400, quality + case, sunglasses.", "price": 10.62, "category": "sunglasses" }, { "imgSrc": "https://i.ebayimg.com/thumbs/images/g/JSEAAOSwqrZg2giE/s-l225.webp", "title": "Ray ban aviator 3025-14-3n mirror grey silver size 55/58/62 new", "price": 69.98, "category": "sunglasses" }, { "imgSrc": "https://i.ebayimg.com/thumbs/images/g/cgEAAOSwJiBfzNjp/s-l225.webp", "title": "Aviator Sunglasses American Men Eyewear AO Army Military Pilot Optical Glass AO", "price": 14.99, "category": "sunglasses" }, { "imgSrc": "https://i.ebayimg.com/thumbs/images/g/-fwAAOSwUvhdzLhk/s-l225.webp", "title": "Polarized Shield FIT OVER SUNGLASSES COVER All Glasses Fishing 2 Size M or L", "price": 12.99, "category": "sunglasses" }, { "imgSrc": "https://i.ebayimg.com/thumbs/images/g/HE8AAOSwf-Jgxyzj/s-l225.webp", "title": "Oakley Prism Polarised Sunglasses", "price": 103.81, "category": "sunglasses" }, { "imgSrc": "https://i.ebayimg.com/thumbs/images/g/mzcAAOSw1m1dHEyV/s-l225.webp", "title": "Polarized Clip-on Flip-up Driving Sunglasses Glasses UV Resistant UV400", "price": 3.63, "category": "sunglasses" }, { "imgSrc": "https://i.ebayimg.com/thumbs/images/g/zTIAAOSwvihY9fK~/s-l225.webp", "title": "Sunglasses, clip on flip, polarized glasses, sunglasses, Graduated", "price": 5.1, "category": "sunglasses" }, { "imgSrc": "https://i.ebayimg.com/thumbs/images/g/bZwAAOSwVotg44hS/s-l225.webp", "title": "Polarized Sunglasses Men Women Square Cycling Sport Driving Fishing UV400 ", "price": 8.24, "category": "sunglasses" }, { "imgSrc": "https://i.ebayimg.com/thumbs/images/g/5QAAAOSwvl9g44pt/s-l225.webp", "title": "Polarized Sunglasses Men Women Square Cycling Sport Driving Fishing ", "price": 9.54, "category": "sunglasses" }, { "imgSrc": "https://i.ebayimg.com/thumbs/images/g/faIAAOSwJPtg47F0/s-l225.webp", "title": "ray ban sunglasses chris", "price": 35, "category": "sunglasses" }, { "imgSrc": "https://i.ebayimg.com/thumbs/images/g/w4gAAOSwCTNg05IQ/s-l225.webp", "title": "Bentley Eyewear Sunglasses", "price": 83.05, "category": "sunglasses" }, { "imgSrc": "https://i.ebayimg.com/thumbs/images/g/iGEAAOSwpCdgqErU/s-l225.webp", "title": "Ray-ban Clubmaster Sunglasses", "price": 76.13, "category": "sunglasses" }, { "imgSrc": "https://i.ebayimg.com/thumbs/images/g/1CIAAOSwp7VgYWNk/s-l225.webp", "title": "KOST Eyewear Sunglasses", "price": 9.41, "category": "sunglasses" }, { "imgSrc": "https://i.ebayimg.com/thumbs/images/g/q2kAAOSwUYpdTdpd/s-l225.webp", "title": "KHAN SHIELD AVIATOR SUNGLASSES SPORT WRAP AROUND ONE PIECE LENS RETRO LUXURY VTG", "price": 10.95, "category": "sunglasses" }, { "imgSrc": "https://i.ebayimg.com/thumbs/images/g/FWkAAOSwrD9g5Ats/s-l225.webp", "title": "Ray-Ban RB3386 Polarized Aviator Classic G-15 Lens Sunglasses MADE IN ITALY NEW", "price": 139.99, "category": "sunglasses" }, { "imgSrc": "https://i.ebayimg.com/thumbs/images/g/wSoAAOSwKZJg5CiS/s-l225.webp", "title": "Ray-Ban Lei Peng Sunglasses", "price": 27.68, "category": "sunglasses" }, { "imgSrc": "https://i.ebayimg.com/thumbs/images/g/f9UAAOSwnGldnQ2w/s-l225.webp", "title": "Round Oval Metal Frame Sunglasses Mirrored Lens Spring Hinge Unisex UV 400", "price": 24.94, "category": "sunglasses" }, { "imgSrc": "https://i.ebayimg.com/thumbs/images/g/VNQAAOSwwSpfr~e9/s-l225.webp", "title": "Ray Ban POLARIZED Sunglasses RB4151 601/2P Glossy Black W/ Classic Grey-Green", "price": 183, "category": "sunglasses" }, { "imgSrc": "https://i.ebayimg.com/thumbs/images/g/sHUAAOSw1JVZ6ULA/s-l225.webp", "title": "Large Polarized Clip On Sunglasses Flip Up Glasses Driving Fishing Sports Square", "price": 29.95, "category": "sunglasses" }, { "imgSrc": "https://i.ebayimg.com/thumbs/images/g/cYcAAOSwFV9XzWck/s-l225.webp", "title": "Ray Ban RB 3025 Aviator Drop Sunglasses Sunglasses sunnenbrille wedges", "price": 129.29, "category": "sunglasses" }, { "imgSrc": "https://i.ebayimg.com/thumbs/images/g/CJYAAOSw98Fgojfk/s-l225.webp", "title": "Bono sunglasses d&g", "price": 219.44, "category": "sunglasses" }, { "imgSrc": "https://i.ebayimg.com/thumbs/images/g/IawAAOSw8lxg5C79/s-l225.webp", "title": "Unisex sunglasses", "price": 30.44, "category": "sunglasses" }, { "imgSrc": "https://i.ebayimg.com/thumbs/images/g/qcsAAOSwCVhg44~W/s-l225.webp", "title": "oakley flak sunglasses white ", "price": 28.3, "category": "sunglasses" }, { "imgSrc": "https://i.ebayimg.com/thumbs/images/g/EMEAAOSwP4RgvzOA/s-l225.webp", "title": "mens police sunglasses", "price": 55.35, "category": "sunglasses" }, { "imgSrc": "https://i.ebayimg.com/thumbs/images/g/Zk0AAOSwMlBgtWiL/s-l225.webp", "title": "Mens engraved sunglasses", "price": 10.37, "category": "sunglasses" }, { "imgSrc": "https://i.ebayimg.com/thumbs/images/g/4RIAAOSwMUBg4~6Q/s-l225.webp", "title": "Gentle Monster Flatba HER 01 Black Sunglasses-Very Good Condition&Authentic", "price": 89.61, "category": "sunglasses" }, { "imgSrc": "https://i.ebayimg.com/thumbs/images/g/xP8AAOSw1jJg5Bjn/s-l225.webp", "title": "Square Sunglasses Hexagon Men Metal Frame Fishing Glasses Outdoor Fashion Shade", "price": 8.99, "category": "sunglasses" }, { "imgSrc": "https://i.ebayimg.com/thumbs/images/g/hZEAAOSwIspge1rE/s-l225.webp", "title": "Retro Sport Cycling Fishing Racing Hunting Surfing Running Polarized Sunglasses", "price": 12.98, "category": "sunglasses" }, { "imgSrc": "https://i.ebayimg.com/thumbs/images/g/8yMAAOSw~Cxg44SD/s-l225.webp", "title": "Polarized Sunglasses Men Women Square Cycling Sport Driving Fishing UV400 ", "price": 8.29, "category": "sunglasses" }, { "imgSrc": "https://i.ebayimg.com/thumbs/images/g/6yoAAOSwi6lg5B8C/s-l225.webp", "title": "Aluminium Mens Driving Polarized Photochromic Sunglasses Sport Chameleon Glasses", "price": 12.44, "category": "sunglasses" }, { "imgSrc": "https://i.ebayimg.com/thumbs/images/g/PVYAAOSw9mtd6B3j/s-l225.webp", "title": "Flip Up Fit Over Sunglasses Polarized Lens Cover Over PRESCRIPTION GLASSES UV", "price": 13.95, "category": "sunglasses" }];

  private url = "https://webshop-07-8194e-default-rtdb.europe-west1.firebasedatabase.app/items.json";

  // backendUrl = "http://localhost:8080/api/items"

  constructor(private http: HttpClient) { }

  saveItemsToDatebase() {
    console.log(this.items);
    return this.http.put(this.url, this.items);
  }

  getItemsFromDatabase() {
    return this.http.get<Item[]>(this.url);
  }

  saveToServiceFromDatabase(itemsFromDatabase: Item[]) {
    this.items = itemsFromDatabase;
  }

  // this.itemService.items.push(form.value);
  // this.itemService.addItem(form.value);
  addItem(item: Item): void {
    this.getItemsFromDatabase().subscribe(firebaseItems => {
      this.items = firebaseItems;
      this.items.push(item);
      this.saveItemsToDatebase().subscribe();
    })
  }

  // = this.itemService.items;
  // = this.itemService.getItems();
  // getItems(): Item[] {
  //   return this.items.slice();
  // }

  // = this.itemService.items.find(item => item.title == this.id);
  // = this.itemService.getItem(this.id);
  getItem(id: string): Item | undefined {
    return this.items.find(item => item.title == id);
  }

  // = this.itemService.items.indexOf(this.item);
  // = this.itemService.getItemIndex(this.item);
  getItemIndex(item: Item): number {
    return this.items.indexOf(item);
  }

  // this.itemService.items[index] = form.value
  // this.itemService.editItem(index, form.value)
  editItem(index: number, item: Item): Observable<Object> {
    this.items[index] = item;
    return this.saveItemsToDatebase();
  }

  // this.itemService.items.splice(index,1)
  // this.itemService.deleteItem(index);
  deleteItem(index: number): Observable<Object> {
    this.items.splice(index, 1);
    return this.saveItemsToDatebase();
  }
}
