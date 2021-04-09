import * as React from 'react';
import {Container} from '@material-ui/core';

export const MovieShowcase = (): React.ReactElement => {
    return (
        <div className='showcase'>
            <Container>    
                <p>IMDb Charts</p>
                <h1>Top Rated Movies</h1>
            </Container>    
        </div>
    )
}