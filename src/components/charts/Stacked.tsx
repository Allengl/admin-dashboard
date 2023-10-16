'use client'
import React, { FC } from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip, DataLabel } from '@syncfusion/ej2-react-charts';

import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '@/app/data/dummy';

interface StackedProps {
  width: string,
  height: string
}

const Stacked: FC<StackedProps> = ({ width, height }) => {
  return (
    <ChartComponent
      width={width}
      height={height}
      id='stack chart'
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ enable: true }}
    >
      <Inject services={[StackingColumnSeries, Legend,
        Category, Tooltip]} />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item,index) => 
          <SeriesDirective key={index} {...item} />
        )}
      </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default Stacked
