import React, { useState } from 'react'
import { ANIMALS } from '@frontendmasters/pet';

const SearchParams = () => {
    const [ location, setLocation ] = useState('Seattle, WA');
    const [ animal, setAnimal ] = useState('dog');

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
                    
                    
                    
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default SearchParams;