import { useEffect } from 'react';
import Card from '../../components/Card/Card';
import './Category.css';

import productsData from '../../data/products';

type Props = {}

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
        {productsData.map((card) => <Card key={card.id} {...card}/>)}
      </section>
    </main>
  );
};

export default Category;
