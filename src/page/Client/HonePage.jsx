import React, { useEffect, useState } from 'react';
import Search from '../../components/Client/Search';
import Category from '../../components/Client/Section/Category';
import Featured from '../../components/Client/Section/Featured';
import Banner from '../../components/Client/Section/Banner';
import { getAllProduct } from '../../service/product';
import { getAllCategories } from '../../service/category';

function HonePage(props) {

  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getAllProductFunc()
    handleGetAllCategories()
  }, [])

  const getAllProductFunc = async () => {
    const param = {
      limit: 10
    }
    const res = await getAllProduct(param)
    setProducts(res.data)

  }
  const handleGetAllCategories = async () => {
    const res = await getAllCategories()
    setCategories(res.data)
  }

  return (
    <div>
      <Search />
      <Category categories={categories} />
      <Featured products={products} />
      <Banner />
    </div>
  );
}

export default HonePage;