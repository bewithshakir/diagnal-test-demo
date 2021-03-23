import React, { Component } from 'react';
import './dashboard.css';
import { connect } from 'react-redux';

import HeaderTop from '../headerTop/headerTop';
import { getMovies, searchMovies } from '../../store/actions/actions';
import { MovieElem } from '../../components/movie/movie';

class Dashboard extends Component {
    state = {
        scrollCounter: 1
    }
    componentDidMount() {
        if(this.props.moviesData.movies.length === 0){
            window.addEventListener("scroll", this.onScroll, false);
            this.props.getMovies(this.state.scrollCounter);
        }
    }
    
    componentWillUnmount() {
        window.removeEventListener("scroll", this.onScroll, false);
    }
    onScroll = (e) => {
        let scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        let scrollHeight = (document.documentElement && document.documentElement.scrollHeight) || document.body.scrollHeight;
        let clientHeight = document.documentElement.clientHeight || window.innerHeight;
        let scrolledToBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;

        // check if scroll is in bottom
        if(scrolledToBottom){
            let count = this.state.scrollCounter + Math.floor(scrolledToBottom);
            if (count <= 3) {
                this.setState({scrollCounter: count}, ()=> {
                    this.props.getMovies(this.state.scrollCounter);
                });
            }
        }

    };

    render() {
        const {moviesData} =  this.props;
        return (
            <div className="app_wrapper">
                <HeaderTop title={moviesData.movieType}/>
                <div className="container-fluid body_container">
                    <div className="row">
                    {moviesData.movies && moviesData.movies.map((item, index) => (
                        <div className="col-sm-4 mb-90" key={index}>
                            <MovieElem captionName={item['name']} poster={item['poster-image']}/>
                        </div>
                        
                    ))}
                    {moviesData.loading && (
                        <h2 style={{textAlign: 'center'}}>loadding...</h2>
                    )}
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=> {
    return  {
        moviesData: state.moviesData
    }
}
export default connect(mapStateToProps, {getMovies, searchMovies})(Dashboard);
