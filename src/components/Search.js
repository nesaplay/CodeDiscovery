import React from 'react'
import { Input, Button } from 'semantic-ui-react'

const Search = ({ searchHandler, clickHandler }) => (
        <Input icon='github'
            iconPosition='left' 
            placeholder='Search github repositiories...' 
            size='huge'
            fluid
            action={<Button onClick={() => clickHandler()}>Search</Button>}
            onChange={({ target }) => searchHandler(target.value)}
        />
    )

export default Search