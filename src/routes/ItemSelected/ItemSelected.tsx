import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import productsData from '../../data/products';
import Card from '../../components/Card/Card';
type Props = {}

const ItemSelected = (props: Props) => {
  const {id} =  useParams();

  const fetchItem =  () => {
    const selectedItem = productsData.filter(
      (product) => id 
        ? product.id == +id 
        : product.id == 0 
    )[0];
    return selectedItem;
  };


  useEffect(() => {fetchItem();},[]);

  return (
    <main>
      <Card {...fetchItem()}/>
    </main>
  );
};

export default ItemSelected;
