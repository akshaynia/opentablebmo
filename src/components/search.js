import React from "react";
import { connect } from "react-redux";
import { addCity } from "../redux/actions";
import PageList from "./pagelist";
import axios from "axios";
import Table from "./table";
import './table.css'


class AddCity extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
        input: "",
        per_page:10,
        loadRestaurant:false,
        current_page:1
     };
  }

  updateInput = input => {
    this.setState({ input });
  };

  handleAddCity = () => {
    this.setState({
     loadRestaurant:true,
    },this.fetchRestaurants);
    this.props.addCity(this.state.input);
    
  };

  fetchRestaurants = ()=>{
    axios("http://opentable.herokuapp.com/api/restaurants?city="+ this.state.input+"&per_page=" +this.state.per_page+"&page="+this.state.current_page)
    .then(res => {
        const restaurants = res.data.restaurants;
        console.log(restaurants);
        this.setState({
            restaurants: restaurants,
            count:res.data.total_entries,
            
        })
        
    })
  }
  
  onPageClick = (e, pageNumber) =>{
    console.log(pageNumber)
    this.setState({
      current_page: pageNumber,
    },this.fetchRestaurants);
  }

  render() {
    return (
      <div className="searchcontainer">
        <input
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <button className="searchrestaurant"  onClick={this.handleAddCity}>
          Search Restaurants
        </button>
        { this.state.restaurants?(
        <div>
        <Table restaurants={ this.state.restaurants}/>
        <PageList count={this.state.count} onPageClick={this.onPageClick}/>
        </div>
        ):null}
        
      </div>
    );
  }
}

export default connect(
  null,
  { addCity }
)(AddCity);
// export default AddTodo;
