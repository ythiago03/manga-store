type Props = {
  totalPrice: number;
  divider: number;
};

const dividerPrice = ({totalPrice, divider}: Props): string => {
  const newValue = (totalPrice/divider).toFixed(2);
  
  return newValue;
};

export default dividerPrice;
