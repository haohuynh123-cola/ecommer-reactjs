import React from 'react';
import { Table } from 'antd';
function TableCustom(props) {
  const { columns, data, isLoading } = props
  return (
    <React.Fragment>
      <Table columns={columns} dataSource={data} loading={isLoading} />
    </React.Fragment>
  );
}

export default TableCustom;