import React, { useState } from 'react'

const SearchParams = () => {
    const [ location, setLocation ] = useState('Seattle, WA');
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
                </label>

                <button>Submit</button>
            </form>
        </div>
    )
}

export default SearchParams;