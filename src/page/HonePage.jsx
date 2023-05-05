import React, { useEffect, useState } from 'react';
import Search from '../components/Search';
import Category from '../components/Section/Category';
import Featured from '../components/Section/Featured';
import Banner from '../components/Section/Banner';
import { getAllProduct } from '../service/product';

function HonePage(props) {

  const [products, setProducts] = useState([])

  useEffect(() => {
    getAllProductFunc()
  }, [])

  const getAllProductFunc = async () => {
    const param = {
      limit: 10
    }
    const res = getAllProduct(param)
    setProducts(res.data)
    console.log(res)

  }

  return (
    <div>
      <Search />
      <Category />
      <Featured />
      <Banner />
    </div>
  );
}

export default HonePage;