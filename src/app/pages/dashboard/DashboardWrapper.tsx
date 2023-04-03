/* eslint-disable jsx-a11y/anchor-is-valid */
import {FC} from 'react'

import {useIntl} from 'react-intl'
// import PieChart from 'react-pie-graph-chart';
import {toAbsoluteUrl} from '../../../_metronic/helpers'
import {PageTitle} from '../../../_metronic/layout/core'
import {
  CardsWidget7,
  CardsWidget17,
  CardsWidget20,
  MixedWidget2,
  ChartsWidget3,
} from '../../../_metronic/partials/widgets'
import { CardsWidget170 } from '../../../_metronic/partials/widgets/_new/cards/CardsWidget170'
import { AllChargersMap } from './AllChargersMap'

const DashboardPage: FC = () => (
  
  <>

    {/* begin::Row */}
    <div className='row g-5 g-xl-10 mb-5 mb-xl-10'>
      {/* begin::Col */}
      <div className='col-md-6 col-lg-6 col-xl-6 col-xxl-6 mb-md-5 mb-xl-10'>
       
        <MixedWidget2
            className='card-xl-stretch mb-xl-8 '
            chartColor='info'
            chartHeight='200px'
            strokeColor='#4e12c4'
          />
          
        
      </div>
      {/* end::Col */}

      {/* begin::Col */}
      <div className='col-md-6 col-lg-6 col-xl-6 col-xxl-3 mb-md-5 mb-xl-10'>
        
      <CardsWidget20
          className='h-md-50 mb-5 mb-xl-10'
          description='Total Customer Tickets'
          color='#1B9A8B'
          img={toAbsoluteUrl('/media/patterns/vector-1.png')}
          percent="72"
          heading="69"
          pending="43 Resolved"
        />
       
         <CardsWidget7
          className='h-md-50 mb-5 mb-xl-10'
          description='Total consumer'
          color='#1B9A8B'
          icon={false}
          stats={357}
          labelColor='dark'
          textColor='gray-300'
          />
      
      </div>

     
      <div className='col-md-12 col-lg-12 col-xl-12 col-xxl-3 mb-md-5 mb-xl-10'>
        
       
       
        
		<div className="row">
		<div className='col-md-6 col-lg-6 col-xl-6 col-xxl-12 mb-md-5 mb-xl-10'>
		
		<CardsWidget17 className='h-md-50 mb-5 mb-xl-10'/>
		</div>

		<div className='col-md-6 col-lg-6 col-xl-6 col-xxl-12 mb-md-5 mb-xl-10'>
		<CardsWidget170 className='h-md-50 mb-5 mb-xl-10'/>
		</div>
		</div>    
      
      </div>

	  
    </div>
    {/* end::Row */}

    {/* begin::Row */}
    <div className='row gx-5 gx-xl-10'>
      {/* begin::Col */}
      <div className='col-xxl-6 mb-5 mb-xl-10'>
        {/* <app-new-charts-widget8 cssclassName="h-xl-100" chartHeight="275px" [chartHeightNumber]="275"></app-new-charts-widget8> */}
      </div>
      {/* end::Col */}

      {/* begin::Col */}
      <div className='col-xxl-6 mb-5 mb-xl-10'>
        {/* <app-cards-widget18 cssclassName="h-xl-100" image="./assets/media/stock/600x600/img-65.jpg"></app-cards-widget18> */}
      </div>
      {/* end::Col */}
    </div>
    {/* end::Row */}

    {/* begin::Row */}
    <div className='row gy-5 gx-xl-8'>
      <div className='col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
        <ChartsWidget3 className='card-xl-stretch mb-xl-8'/>
      </div>
    </div>

	<div className='row gy-5 g-xl-8'>
	  <div className='col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
	     <AllChargersMap className='card-xl-stretch mb-xl-8'/>
	   </div>	
	</div>	
   
	 

   
  
  
    
  </>
)

const DashboardWrapper: FC = () => {
  const intl = useIntl()
  return (
    <>
      <PageTitle breadcrumbs={[]}>{intl.formatMessage({id: 'MENU.DASHBOARD'})}</PageTitle>
      <DashboardPage />
    </>
  )
}

export {DashboardWrapper}
