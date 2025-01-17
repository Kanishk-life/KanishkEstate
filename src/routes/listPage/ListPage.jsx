import React from 'react'
import "./list.scss";
import Card from "../../components/Card/Card";
import { listData } from '../../lib/dummyData';
import { Filter } from '../../components/filter/Filter';
import { Map } from '../../components/map/Map';

const ListPage = () => {
  const data = listData
  return (
    <div className='listpage'>
      <div className="listContainer">
        <div className="wrapper">
          <Filter/>
        {
          data.map(item=>(
            <Card key={item.id} item = {item}/>
          ))
        }
        </div>
      </div>
      <div className="mapContainer">
        <Map items={data}/>
      </div>
      
    </div>
  )
}

export default ListPage
