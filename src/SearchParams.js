import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";

const SearchParams = () => {
  const [location, setLocation] = useState("Seattle, WA");
  const [breeds, setBreeds] = useState([]);

  const [animal, AnimalDropdown] = useDropdown("Animal", "dog", ANIMALS);
  const [breedd, BreedsDropdown] = useDropdown("Breed", "", breeds);

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
