import React, { useState } from 'react'

import { LocalStorage } from '../helpers/LocalStorage'

import { SearchBar } from './SearchBar'


export const Students = () => {
const data=LocalStorage();
const [datacopy, setDatacopy] = useState(data);
  
  return (
    <>
        <SearchBar data={datacopy} setDatacopy={setDatacopy} />
        {/* {<PintarTabla data={data}/>} */}
    </>
  )
}
