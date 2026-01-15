import React, { createContext, useState } from 'react'

//1 create context
export const searchContext=createContext("")
function SearchContextShare({children}) {
    //2 Global state
    const [searchKey,setSearchKey]=useState("")
  return (
    //provide Context using provider
    <searchContext.Provider value={{searchKey,setSearchKey}}>
    {
       children 
    }
    </searchContext.Provider>
  )
}

export default SearchContextShare