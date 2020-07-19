import React from 'react'

const SearchParams = (props) => {
    const location = "Seattle, WA"
    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Location:<br/>
                    <input 
                        placeholder="Location.."
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