// 1. kui on andmemudel 50 võti-väärtu paari pikk
// 2. ühe muutuse tegemiseks teen siin mudelis ühe mutuuse
// 3. tulen siia ühte modelisse ja näen mis ta omadused on
// 4. pealevaadates saan aru kas nad on ühesugused
// 5. koodi kirjutades ja kasutusele võttes kirjutan vaid 1 sõna

// any-ga:
// 1. ei saa suvalisi asju sisse kirjutada
// 2. kompileerimisel ei teki vigu anyga, nüüd tekivad kui on vale tüüp

export class Item {
    constructor(
        public imgSrc: string,
        public title: string,
        public price: number,
        public category: string,
        public isActive: boolean
    ) { }
}

// { imgSrc: string, title: string, price: number, category: string }

// export class Items {
//     public imgSrc: string;
//     public title: string;
//     public price: number;
//     public category: string;
//     constructor(
//         _imgSrc: string,
//         _title: string,
//         _price: number,
//         _category: string
//     ) {
//         this.imgSrc = _imgSrc;
//         this.title = _title;
//         this.price = _price;
//         this.category = _category;
//     }
// }