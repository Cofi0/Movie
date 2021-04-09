import * as React from 'react';
import {Container, Button} from '@material-ui/core';
import './style.css';

type MovieNavProps = {
    homePage(): void;
}


export const MovieNav = (props: MovieNavProps): React.ReactElement =>
{
    return(
        <header>
            <Container>
                <nav>
                    <Button onClick={props.homePage}>IMDB</Button>
                    <p className='right'>Sign in</p>
                </nav>
            </Container>
        </header>
    )
}