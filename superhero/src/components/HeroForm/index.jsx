import React, { useState , useEffect} from 'react';

export default function HeroForm({ handleSearch }) {
  const [inputValue, setInputValue] = useState("");
  const [showHeroList, setShowHeroList] = useState(false);
  function handleInput(e) {
    const newInput = e.target.value;
    setInputValue(newInput);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleSearch(inputValue);
    setInputValue("");
  }
  useEffect(() => {
    if (showHeroList) {
      // If showHeroList is true, wait for a short delay to apply the show class
      // This ensures the element is visible before applying the fade-in effect
      setTimeout(() => {
        setShowHeroList(true);
      }, 50);
    }
  }, [showHeroList]);


  return (
    <div>
      <form className="search" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleInput}
          placeholder="Search something"
          value={inputValue}
          required
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}
