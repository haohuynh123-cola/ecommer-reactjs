import React, { useEffect, useState } from 'react';
import { getAllProduct } from '../../../service/product';
import TableCustom from '../../../components/Admin/Base/TableCustom';
import { columns } from './Column';

const Product = (props) => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getAllProductFunc()
  }, [])

  const getAllProductFunc = async () => {
    const param = {
      // limit: 10
    }
    const res = await getAllProduct(param)
    setProducts(res.data)
    setIsLoading(false)
  }

  return (
    <div>

      <TableCustom columns={columns} data={products
      } isLoading={isLoading}></TableCustom>
    </div>
  );
}

export default Product;