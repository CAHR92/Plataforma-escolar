import React from 'react'

import { LocalStorage } from '../helpers/LocalStorage'
import { PintarTabla } from './PintarTabla'
import { SearchBar } from './SearchBar'


export const Students = () => {
const data=LocalStorage();

  
  return (
    <>
        <SearchBar data={data}/>
        {/* {<PintarTabla data={data}/>} */}
    </>
  )
}
