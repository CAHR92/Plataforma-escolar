import React from 'react'
import { DatosProvider } from '../context/DatosProvider'



import { SearchBar } from './SearchBar'


export const Students = () => {


  
  return (
    <>
        <DatosProvider>
            <SearchBar />
        </DatosProvider>
        
       
    </>
  )
}
