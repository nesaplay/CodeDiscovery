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
            onChange={({ target }) => searchHandler(target.value)}
            action={
                <Button type='submit' 
                    loading={isLoading} 
                    onClick={() => clickHandler()}>
                    Search
                </Button>
            }
        />
    )

export default Search