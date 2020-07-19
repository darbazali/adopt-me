import React, { useState } from 'react'
import { ANIMALS } from '@frontendmasters/pet';

const SearchParams = () => {
    const [ location, setLocation ] = useState('Seattle, WA');
    const [ animal, setAnimal ] = useState('dog');

    const [breed, setBreed] = useState('')
    const [breeds, setBreeds] = useState([])

    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Location:<br/>
                    <input 
                        placeholder="Location.."
                        onChange={ e => setLocation(e.target.value) }
                        id="location" 
                        value={location}>
                    </input>
                </label><br/>
                <label htmlFor="animal">
                    Animal<br/>
                    <select 
                    value={animal}
                    onBlur={ e => setAnimal(e.target.value)}
                    onChange={e => setAnimal(e.target.value)}>
                        <option>All</option>
                        {
                            ANIMALS.map( ( pet, index) => (<option value={pet} key={index}>{pet}</option>))
                        }
                    </select>
                    
                </label><br/>

                <label htmlFor="breed">
                    Breed<br/>
                    <select
                        id="breed"
                        value={breed}
                        onChange={ e => setBreed( e.target.value ) }
                        onBlur={ e => setBreed( e.target.value ) }
                        disabled={breeds.length === 0}
                    >
                        <option>All</option>
                        {
                            breeds.map( breedOpt => (<option key={breedOpt} value={breedOpt}>{breedOpt}</option>))
                        }
                    </select>
                </label>


                <button>Submit</button>
            </form>
        </div>
    )
}

export default SearchParams;