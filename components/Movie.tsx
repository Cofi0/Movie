import * as React from 'react';
import {MovieNav} from './Elements/MovieNav';
import {MovieShowcase} from './Elements/MovieShowcase';
import {MovieData, MovieDataElement} from './Data/MovieData';
import MovieElement from './Elements/MovieElement';

export enum PageType {
    Movie,
    Catalogue,
}

type MovieElementState = {
    index: number;
    elementData: MovieDataElement | undefined;
}

export default class Movie extends React.Component<any, MovieElementState>{
    constructor(props: any){
        super(props);
        this.state = {
            index: 0,
            elementData: undefined,
        }
    }

    elementsData: MovieDataElement[] = MovieData;

    moreDetails = (value: number): void => {
        this.setState({
            index: value,
            elementData: this.elementsData.find(ed => ed.id === this.state.index),
        })
    }

    homePage = (): void => {
        this.setState({
            index: 0,
        })
    }

    
    

    render(){
        return(
            <React.Fragment>
        
                <MovieNav homePage={this.homePage}/>
                {this.state.index !== 0 ? 
                <div id='movie'>
                    <img src={this.elementsData.find(ed => ed.id === this.state.index)? this.elementsData.find(ed => ed.id === this.state.index)?.img : ''} alt=""/>
                    <p>{this.elementsData.find(ed => ed.id === this.state.index) 
                    ? this.elementsData.find(ed => ed.id === this.state.index)?.shortDesc : ''} </p>
                    <p>{this.elementsData.find(ed => ed.id === this.state.index)? this.elementsData.find(ed => ed.id === this.state.index)?.stars : ''}</p>
                    <hr/>
                </div> : 
                <React.Fragment>
                    <MovieShowcase />
                    {this.elementsData.map(ed => 
                        <MovieElement elementData={ed} parentComponent={PageType.Movie} moreDetails={this.moreDetails} />
                    )}
                </React.Fragment>
                }
                
            </React.Fragment>
        );
    }
}
