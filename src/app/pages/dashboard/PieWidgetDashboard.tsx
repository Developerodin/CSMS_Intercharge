import React from "react";
import { PieChart } from 'react-minimal-pie-chart';

type Props = {
    className: string
  }

const dataMock = [
    { title: '2-Wheelers', value: 10, color: '#2E2A4F' },
    { title: 'Mini Cooper', value: 15, color: '#1B9A8B' },
    { title: 'Kia', value: 20, color: '#DCE2C8' },
    { title: 'MG Hector', value: 7, color: '#FFC700' },
    { title: 'Tata', value: 12, color: '#7239EA' },
    { title: 'Maruti', value: 4, color: '#6A2135' },
  ];
  
const defaultLabelStyle = {
    fontSize: '5px',
    fontFamily: 'sans-serif',
  };
  
const PieWidgetDashboard: React.FC<Props> = ({className}) =>{
      
  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className='card-header border-0 pt-5'>
        <h3 className='card-title align-items-start flex-column'>
          <span className='card-label fw-bold fs-3 mb-1'>Users & Transactions Share</span>

          <span className='text-muted fw-semibold fs-7'>Brand wise user and revenue pie chart</span>
        </h3>
        </div>
      {/* end::Header */}
      {/* begin::Body */}
      <div className='card-body'>  
      <div className="row">
        <div className="col-sm-6">
          <p>User Market Share</p>
            <PieChart
            data={dataMock}
            label={({ dataEntry }) => dataEntry.value}
            labelStyle={{
              ...defaultLabelStyle,
            }}
           
            lineWidth={85}
          />
        </div>
        <div className="col-sm-6">
          <p>Revenue Market Share</p>
            <PieChart
            data={[
              { title: 'One', value: 10, color: '#E38627' },
              { title: 'Two', value: 15, color: '#C13C37' },
              { title: 'Three', value: 20, color: '#6A2135' },
            ]}
            lineWidth={85}
          />
        </div>
      </div>
      
      </div>
    </div>
      );
}  

export {PieWidgetDashboard}