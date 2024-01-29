import React from 'react';

// Search component with input for filtering students
const Search = ({ search, setSearch }) => {
    return (
        <div className='col-sm-6 mb-4'>
            {/* Form for search input */}
            <form onSubmit={(e) => e.preventDefault()}>
                {/* Input for search */}
                <input
                    className='form-control'
                    type='search'
                    role='searchbox'
                    placeholder='Search student...'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </form>
        </div>
    );
}

export default Search;
