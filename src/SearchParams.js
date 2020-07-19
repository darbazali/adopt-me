import React from 'react'

const SearchParams = (props) => {
    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    Location:<br/>
                    <input 
                        placeholder="Location.."
                        id="location" 
                        value={props.location}>
                    </input>
                </label>

                <button>Submit</button>
            </form>
        </div>
    )
}

export default SearchParams;