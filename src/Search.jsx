import { useState } from "react";
import { useNavigate } from "react-router-dom";


export function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    if (searchTerm.trim() !== "") {
      navigate(`/${searchTerm}`);
    }
  }

  return (
    <>
      <h1>Search</h1>
      <input 
        type="text" 
        placeholder="Enter a city" 
        value={searchTerm} onChange={handleInputChange} />
      <button onClick={handleSearch}>
        Search
      </button>
    </>
  );
}