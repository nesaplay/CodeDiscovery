import React from 'react'
import { Input, Button } from 'semantic-ui-react'

const Search = ({ 
    searchHandler, 
    clickHandler,
    isLoading 
}) => (
        <Input icon='github'
            iconPosition='left' 
            placeholder='Search github repositiories...' 
            size='huge'
            fluid
            action={<Button loading={isLoading} onClick={() => clickHandler()}>Search</Button>}
            onChange={({ target }) => searchHandler(target.value)}
        />
    )

export default Search