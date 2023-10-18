import React, { useState } from 'react'
import Navbar from '../navbar/Navbar';
import Grid from '../grid/Grid';
import GridPriority from '../grid/GridPriority';
import GridUser from '../grid/GridUser';
import './style.css';

const Home = () => {
  const [group, setGroup] = useState('status');
  const [order, setOrder] = useState('priority');

  return (
    <div className='main'>
      <Navbar setGroup={setGroup} setOrder={setOrder} />
      {group === 'status' && <Grid order={order} />}
      {group === 'user' && <GridUser order={order} />}
      {group === 'priority' && <GridPriority order={order} />}
    </div>
  )
}

export default Home;