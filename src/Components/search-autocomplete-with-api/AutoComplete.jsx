import React, { useEffect, useState } from 'react';
import './styles-12.css';

const AutoComplete = ({url}) => {
  const [ names, setNames ] = useState([]);
  const [ showDropDown, setShowDropDown ] = useState(false);
  const [ inputValue, setInputValue ] = useState("")
  const [ filteredData, setFilteredData ] = useState([]);
  
  async function fetchNames(url){
    try{
     const response = await fetch(`${url}`);
     const data = await response.json();
     setNames(data.users.map( name => name.firstName + " " + name.lastName + " " + name.maidenName));
    }
    catch(e){
     console.log(e.message);
    }
  }

  useEffect( () => {fetchNames(url)}, []);

  function handleChange(event){
    const enteredString = event.target.value;
    setInputValue(enteredString);
    const searchedUsers = names.filter(
      (item) => item.toLowerCase().indexOf(enteredString.toLowerCase()) !== -1
    );
    setFilteredData(searchedUsers);
    setShowDropDown(true);
  }

  return (
    <div className="autocomplete-container">
      <h1>Search AutoComplete Project</h1>
      <input 
      type="text"
      placeholder="Try a name such as Evelyn"
      className="mb-2 fs-5 p-1"
      value={inputValue}
      onChange={ (event) => handleChange(event)}
      />
      { names && names.length > 0 && 
        <div>
          { showDropDown && filteredData.map((item, idx) => {
            const search = inputValue.trim();
            if (!search) return <p key={idx}>{item}</p>;
            const lowerItem = item.toLowerCase();
            const lowerSearch = search.toLowerCase();
            const startIdx = lowerItem.indexOf(lowerSearch);
            if (startIdx === -1) return <p key={idx}>{item}</p>;
            const endIdx = startIdx + search.length;
            return (
              <p key={idx}>
                {item.slice(0, startIdx)}
                <strong>{item.slice(startIdx, endIdx)}</strong>
                {item.slice(endIdx)}
              </p>
            );
          })}
        </div>
      }
    </div>
  )
}

export default AutoComplete