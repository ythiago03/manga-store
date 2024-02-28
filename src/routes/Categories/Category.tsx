import Card from '../../components/Card/Card';
import './Category.css';

type Props = {}

const cards = [
  {
    cardId: 1,
    cardTitle: 'Blue Lock',
    cardImg: 'https://m.media-amazon.com/images/I/81Z85oL1xvL._AC_UF1000,1000_QL80_.jpg',
    cardPrice: 39.99,
    cardOldPrice: 29.99,
  },
  {
    cardId: 2,
    cardTitle: 'Vagabond',
    cardImg: 'https://m.media-amazon.com/images/I/71TY7kJBo9L._AC_UF1000,1000_QL80_.jpg',
    cardPrice: 39.99,
    cardOldPrice: 29.99,
  },
  {
    cardId: 3,
    cardTitle: 'One Piece',
    cardImg: 'https://m.media-amazon.com/images/I/91ZJ8D9pmkL._AC_UF1000,1000_QL80_.jpg',
    cardPrice: 39.99,
    cardOldPrice: 29.99,
  },
  {
    cardId: 4,
    cardTitle: 'Oshi no Ko',
    cardImg: 'https://m.media-amazon.com/images/I/71oFAlU1GVL._AC_UF1000,1000_QL80_.jpg',
    cardPrice: 39.99,
    cardOldPrice: 29.99,
  },
  {
    cardId: 5,
    cardTitle: 'Spy x Family',
    cardImg: 'https://m.media-amazon.com/images/I/71vMGRog+iL._AC_UF1000,1000_QL80_.jpg',
    cardPrice: 39.99,
    cardOldPrice: 29.99,
  },
  {
    cardId: 6,
    cardTitle: 'Slam Dunk',
    cardImg: 'https://m.media-amazon.com/images/I/91hPkfq6MLL._AC_UF1000,1000_QL80_.jpg',
    cardPrice: 39.99,
    cardOldPrice: 29.99,
  },
  {
    cardId: 7,
    cardTitle: 'My Hero Academia',
    cardImg: 'https://m.media-amazon.com/images/I/71bELfIWTDL._AC_UF1000,1000_QL80_.jpg',
    cardPrice: 39.99,
    cardOldPrice: 29.99,
  },
  {
    cardId: 8,
    cardTitle: 'Jujutsu Kaisen',
    cardImg: 'https://m.media-amazon.com/images/I/81TmHlRleJL._AC_UF1000,1000_QL80_.jpg',
    cardPrice: 39.99,
    cardOldPrice: 29.99,
  },
  {
    cardId: 9,
    cardTitle: 'Chainsaw Man',
    cardImg: 'https://m.media-amazon.com/images/I/71QS2yNxhoL._AC_UF1000,1000_QL80_.jpg',
    cardPrice: 39.99,
    cardOldPrice: 29.99,
  },
  {
    cardId: 10,
    cardTitle: 'Solo Leveling',
    cardImg: 'https://www.actuabd.com/local/cache-vignettes/L700xH988/arton31100-7c77a.png?1676370907',
    cardPrice: 39.99,
    cardOldPrice: 29.99,
  },
  {
    cardId: 11,
    cardTitle: 'Demon Slayer',
    cardImg: 'https://m.media-amazon.com/images/I/71oZmNhST-L._AC_UF1000,1000_QL80_.jpg',
    cardPrice: 39.99,
    cardOldPrice: 29.99,
  },
  {
    cardId: 12,
    cardTitle: 'Berserk',
    cardImg: 'https://lojamonstra.com.br/loja/wp-content/uploads/2021/08/berserk-9.jpg',
    cardPrice: 39.99,
    cardOldPrice: 29.99,
  },
  {
    cardId: 13,
    cardTitle: 'O Beco',
    cardImg: 'https://m.media-amazon.com/images/I/A1yUNGy8eLL._AC_UF1000,1000_QL80_.jpg',
    cardPrice: 39.99,
    cardOldPrice: 29.99,
  },
  {
    cardId: 14,
    cardTitle: 'Boa Noite Punpun',
    cardImg: 'https://m.media-amazon.com/images/I/51EQ5jMPsHL._AC_UF1000,1000_QL80_.jpg',
    cardPrice: 39.99,
    cardOldPrice: 29.99,
  },
];

const categories = [
  'Ação',
  'Aventura',
  'Comédia',
  'Drama',
  'Horror',
  'Isekai',
  'Sci-Fi',
  'Seinen',
  'Espaço',
  'Vampiros',
  'Suspense',
];

const Category = (props: Props) => {
  return (
    <main className="categories-container">
      <div className="validar-semantica">
        <div className="category-wrapper">
          <h1 className="title">Categorias</h1>
          <ul>
            {categories.map((category) => <li key={category}>{category}</li>)}
          </ul>
        </div>
      </div>
      <section className="cards-wrapper">
        {cards.map((card) => <Card key={card.cardId} {...card}/>)}
      </section>
    </main>
  );
};

export default Category;
