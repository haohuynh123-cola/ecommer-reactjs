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
    try {
      const param = {
        limit: 10
      }
      const res = await getAllProduct(param)
      setProducts(res.data)

    } catch (e) {
      console.log(e)
    }

  }
  const handleGetAllCategories = async () => {
    try {
      const res = await getAllCategories()
      setCategories(res.data)
    } catch (e) {
      console.log(e)
    }
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