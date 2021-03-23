import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft , faSearch} from '@fortawesome/free-solid-svg-icons'
import './headerTop.css';
import { searchMovies } from '../../store/actions/actions';


class HeaderTop extends Component {
    onSearchMovies = (e)=> {
        e.preventDefault();
        const val = this.inputField.value;
        this.props.searchMovies(val);
    }
    render() {
        return (
            <div className="header">
                <div className="hdr_text">
                    <FontAwesomeIcon icon={faArrowLeft} />
                    <h3>{this.props.title}</h3>
                </div>
                <div className="search_form">
                    <form onSubmit={this.onSearchMovies}>
                        <input type="search" ref={(elem)=> this.inputField = elem}/>
                        <button className="search_btn">
                            <FontAwesomeIcon icon={faSearch}/>
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

export default connect(null, {searchMovies})(HeaderTop);