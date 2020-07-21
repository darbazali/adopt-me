import React, { useState, useEffect } from "react";
import pet, { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);

  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breed, BreedsDropdown, setBreed] = useDropdown("Breed", "", breeds);

  useEffect( () => {
      setBreeds([])
      setBreed("")

      pet.breeds(animal).then(({breeds}) => {
        const breedString = breeds.map(({ name }) => name);
        setBreeds(breedString)
      })
  }, [animal, setBreeds, setBreed])


  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location:
          <br />
          <input
            placeholder="Location.."
            onChange={(e) => setLocation(e.target.value)}
            id="location"
            value={location}
          ></input>
        </label>
        <br />

        <AnimalDropdown />
        <BreedsDropdown />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
