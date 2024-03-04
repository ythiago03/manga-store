
const toReal = (value: number) => {
  const convetedValue = value.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});

  return convetedValue;
};

export default toReal;
