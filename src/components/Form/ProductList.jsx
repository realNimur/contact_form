import React, { useEffect, useState } from 'react';
import { getAllProducts } from '../../api/api';

const ProductItem = ({ title, id, setProduct, ...props }) => {
  const [isSelected, setSelected] = useState(false);

  const handleClick = () => {
    setProduct(id);
    setSelected((prevState) => !prevState);
  };

  return (
    <div className="row row-offset-20">
      <div className="col-3 col-offset-1 col-mobile-5 col-offset-mobile-0">
        <span className="txt-44 uppercase">{title}</span>
      </div>
      <div className="col-1">
        <label htmlFor="pp" className="true-checkbox">
          <input type="checkbox" id="pp" className="true-checkbox__input" />
          <span className="true-checkbox__value" onClick={handleClick}>
            {isSelected ? 'Да' : 'Нет'}
          </span>
        </label>
      </div>
    </div>
  );
};

const ProductList = ({ setProduct }) => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getAllProducts()
      .then((data) => setProductList(data))
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <div className="row row-offset-80 " style={{ paddingBottom: '60px' }}>
        <div className="col-1 d-none-mobile">
          <span className="txt-22">1.</span>
        </div>
        <div className="col-5">
          <span className="txt-22 uppercase">Ваш проект – это</span>
        </div>
        <div className="col-1 d-none-desktop">
          <span className="txt-22">1.</span>
        </div>
      </div>
      {productList.map((item) => (
        <ProductItem
          key={item.id}
          id={item.id}
          title={item.name}
          setProduct={setProduct}
        />
      ))}
    </>
  );
};

export default ProductList;
