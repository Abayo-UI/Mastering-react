import React from 'react';
import './styles-14.css';
import useFetch from './useFetch';


const FetchApiDataWithCustomHook = () => {
   const { data, loading } = useFetch("https://dummyjson.com/products");

  return (
    <div className="custom-fetch-container">
      <h1>UseFetch Custom hook</h1>
      <div>
        { loading ? "loading || Pleasing wait..." : null}
        { data && data.products && data.products.length
        ? data.products.map( dataItem => 
          <p key={dataItem.key}>{dataItem.title}</p>)
        : null}
      </div>
    </div>
  )
}

export default FetchApiDataWithCustomHook