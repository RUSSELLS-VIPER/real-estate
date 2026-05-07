import React from 'react'
import FilterDropdown from './FilterDropdown'
import FilterCheckbox from './FilterCheckbox'
import RangeSlider from './RangeSlider'
import SearchProperties from './SearchProperties'

const SidebarFilters = () => {
  return (
    <div>

       <div className="bg-[#F0F4F9] rounded-3xl p-6 py-8">
      <FilterDropdown/>
      <FilterCheckbox/>
      <RangeSlider/>
      <SearchProperties/>
    </div>
    </div>
  )
}

export default SidebarFilters