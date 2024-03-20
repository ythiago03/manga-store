import Card from '../../components/Card/Card';

//Data
import productsData from '../../data/products';
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

//Styles
import './Category.css';

const Category = () => {

  return (
    <main className="categories-container">
      <aside>
        <div className="category-wrapper">
          <h1 className="title">Categorias</h1>
          <ul>
            {categories.map((category) => <li key={category}>{category}</li>)}
          </ul>
        </div>
      </aside>
      
      <section className="cards-wrapper">
        {productsData.map((card) => <Card key={card.id} {...card}/>)}
      </section>
    </main>
  );
};

export default Category;
