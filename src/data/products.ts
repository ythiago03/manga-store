interface Product {
  id: number,
  title: string,
  coverImg: string,
  oldPrice: number,
  price: number,
}

const productsData: Product[] = [
  {
    id: 1,
    title: 'Blue Lock',
    coverImg: 'https://m.media-amazon.com/images/I/81Z85oL1xvL._AC_UF1000,1000_QL80_.jpg',
    oldPrice: 39.99,
    price: 29.99,
  },
  {
    id: 2,
    title: 'Vagabond',
    coverImg: 'https://m.media-amazon.com/images/I/71TY7kJBo9L._AC_UF1000,1000_QL80_.jpg',
    oldPrice: 59.99,
    price: 49.99,
  },
  {
    id: 3,
    title: 'One Piece',
    coverImg: 'https://m.media-amazon.com/images/I/91ZJ8D9pmkL._AC_UF1000,1000_QL80_.jpg',
    oldPrice: 33.99,
    price: 29.99,
  },
  {
    id: 4,
    title: 'Oshi no Ko',
    coverImg: 'https://m.media-amazon.com/images/I/71oFAlU1GVL._AC_UF1000,1000_QL80_.jpg',
    oldPrice: 29.99,
    price: 28.96,
  },
  {
    id: 5,
    title: 'Spy x Family',
    coverImg: 'https://m.media-amazon.com/images/I/71vMGRog+iL._AC_UF1000,1000_QL80_.jpg',
    oldPrice: 19.99,
    price: 18.59,
  },
  {
    id: 6,
    title: 'Slam Dunk',
    coverImg: 'https://m.media-amazon.com/images/I/91hPkfq6MLL._AC_UF1000,1000_QL80_.jpg',
    oldPrice: 39.99,
    price: 29.99,
  },
  {
    id: 7,
    title: 'My Hero Academia',
    coverImg: 'https://m.media-amazon.com/images/I/71bELfIWTDL._AC_UF1000,1000_QL80_.jpg',
    oldPrice: 22.99,
    price: 20.99,
  },
  {
    id: 8,
    title: 'Jujutsu Kaisen',
    coverImg: 'https://m.media-amazon.com/images/I/81TmHlRleJL._AC_UF1000,1000_QL80_.jpg',
    oldPrice: 27.99,
    price: 25.99,
  },
  {
    id: 9,
    title: 'Chainsaw Man',
    coverImg: 'https://m.media-amazon.com/images/I/71QS2yNxhoL._AC_UF1000,1000_QL80_.jpg',
    oldPrice: 39.99,
    price: 36.99,
  },
  {
    id: 10,
    title: 'Solo Leveling',
    coverImg: 'https://www.actuabd.com/local/cache-vignettes/L700xH988/arton31100-7c77a.png?1676370907',
    oldPrice: 40.99,
    price: 38.99,
  },
  {
    id: 11,
    title: 'Demon Slayer',
    coverImg: 'https://m.media-amazon.com/images/I/71oZmNhST-L._AC_UF1000,1000_QL80_.jpg',
    oldPrice: 39.99,
    price: 29.99,
  },
  {
    id: 12,
    title: 'Berserk',
    coverImg: 'https://lojamonstra.com.br/loja/wp-content/uploads/2021/08/berserk-9.jpg',
    oldPrice: 37.99,
    price: 30.99,
  },
  {
    id: 13,
    title: 'O Beco',
    coverImg: 'https://m.media-amazon.com/images/I/A1yUNGy8eLL._AC_UF1000,1000_QL80_.jpg',
    oldPrice: 68.99,
    price: 58.99,
  },
  {
    id: 14,
    title: 'Boa Noite Punpun',
    coverImg: 'https://m.media-amazon.com/images/I/51EQ5jMPsHL._AC_UF1000,1000_QL80_.jpg',
    oldPrice: 39.99,
    price: 36.99,
  },
];

export default productsData;

const test = {
  coverImg: "https://m.media-amazon.com/images/I/81Z85oL1xvL._AC_UF1000,1000_QL80_.jpg",
  id: 1,
  price: 29.99,
  oldPrice: 39.99,
  title: "Blue Lock",
  quantity: 0,
}