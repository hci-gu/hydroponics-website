import React from 'react'
import { Line } from '@ant-design/charts';

const TempGraph = () => {
    const data = [
      { date: '11:00', value: 22 },
      

    
    ];
  
    const config = {
      data,
      height: 50,
      xField: 'date',
      yField: 'value',
      point: {
        size: 2,
        shape: 'diamond',
      },
    };
    return <Line {...config} />;
  };
export default TempGraph
