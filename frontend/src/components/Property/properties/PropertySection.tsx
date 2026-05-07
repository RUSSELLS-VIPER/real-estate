import React from 'react'
import SidebarFilters from '../Sidebar/SidebarFilters'
import BrokerList from '../Sidebar/BrokerList'

import PropertyTabs from './PropertyTabs'
import PropertyGrid from './PropertyGrid'
import Pagination from './Pagination'



const PropertySection = () => {
  return (
    <div>
         <div className="max-w-[1320px] mx-auto px-4 md:px-6 py-12">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <aside className="w-full lg:w-[400px] flex-shrink-0 flex flex-col gap-6">
    <SidebarFilters/>
    <BrokerList/>
    </aside>
    <div className="flex-1 w-full">
        <PropertyTabs/>
        <PropertyGrid/>
        <Pagination/>
    </div>
    </div>
    </div>
    </div>
  )
}

export default PropertySection