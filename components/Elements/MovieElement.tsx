import * as React from 'react';
import  {Container, Button} from '@material-ui/core';
import {MovieDataElement} from '../Data/MovieData';
import {PageType} from '../Movie';
import './style.css';

type MovieElementProps = {
    elementData: MovieDataElement;
    parentComponent: PageType;
    moreDetails(index:number): void;
}


export default class MovieElement extends React.Component<MovieElementProps> {
   

    constructor(props: MovieElementProps) {
        super(props);
    }


    render(): React.ReactElement {
        return (
            <div id={this.props.parentComponent === PageType.Movie ? 'movie' : ''}>        
                <Container>
                    <img src={this.props.elementData.img} alt=""/>
                    <p>{this.props.elementData.title}</p>
                    <p>{this.props.elementData.year}</p>
                    <Button variant="contained" color="primary" size="medium" 
                        onClick={() => {this.props.moreDetails(this.props.elementData.id as number)}}>
                            Read more
                    </Button>
                </Container>    
            </div>        
        )
    }
}