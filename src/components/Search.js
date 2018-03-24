import React from 'react'
import { Input } from 'semantic-ui-react'

const Search = ({ searchHandler }) => (
        <Input icon='github' 
            placeholder='Search github repositiories...' 
            size='massive'
            fluid
            onChange={({ target }) => searchHandler(target.value)}
        />
    )

export default Search