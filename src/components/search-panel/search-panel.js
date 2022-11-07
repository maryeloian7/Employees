import { Component } from 'react';

import './search-panel.css'

class SearchPanel extends Component{
    constructor(props){
        super(props);
        this.state = {
            term: ''
        }
    }

    onSearch = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onUpdateSearch(term)
    }

    render(){
        return (
            <input 
                type="text" 
                className="from-control search-input"
                placeholder="Find an employee"
                value={this.state.term}
                onChange={this.onSearch}/>
        )
    }

}

export default SearchPanel;