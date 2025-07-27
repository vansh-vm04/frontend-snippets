import React from 'react'
import { useDebounce } from '../hooks/useDebounce'

const SearchPage = () => {
    const searchText = ()=>{
        console.log("request sent to backend")
    }
    const debounce = useDebounce(searchText);
  return (
    <div>
        <input type="text" onChange={debounce} />
    </div>
  )
}

export default SearchPage