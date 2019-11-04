import React from 'react';
import { FormGroup, FormControl, Button } from "react-bootstrap";

export default class BodyData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query1: "",
      query2: "",
      filteredData1: [],
      filteredData2: []
    };
  }

  handleInputChange1 = event => {
    const query1 = event.target.value;
    this.setState(prevState => {
      const filteredData1 = prevState.res1.filter(element => {
        return element.unique_name.toLowerCase().includes(query1.toLowerCase());
      });  
      return {
        query1,
        filteredData1,
      };
    });
  };

  handleInputChange2 = event => {
    const query2 = event.target.value;
    this.setState(prevState => {
      const filteredData2 = prevState.res2.filter(element => {
        return element.unique_name.toLowerCase().includes(query2.toLowerCase());
      });      
      return {
        query2,
        filteredData2
      };
    });
  };

  getData = () => {
    const url1 = [
      `https://api.comparatrip.eu/cities/popular/5`,
    ];
    const url2 = [
      `https://api.comparatrip.eu/cities/popular/from/puteaux/5`,
    ];
    Promise.all([fetch(url1), fetch(url2)])
     .then(([res1, res2]) => { 
     return Promise.all([res1.json(), res2.json()]) 
    })
    .then(([res1, res2]) => {
      const { query1 } = this.state;
      const { query2 } = this.state;
      const filteredData1 = res1.filter(element => {
        return element.unique_name.toLowerCase().includes(query1.toLowerCase());
      });
      const filteredData2 = res2.filter(element => {
        return element.unique_name.toLowerCase().includes(query2.toLowerCase());
      });
      this.setState({
        res1,
        res2,
        filteredData1,
        filteredData2
      });
    });
  };

  UNSAFE_componentWillMount() {
    this.getData();
  }

  handleSubmit = event => {
    event.preventDefault();
    fetch(`https://api.comparatrip.eu/cities/autocomplete/?q=${this.state.query1}`)
    .then(res => res.json())
    .then(res => {
      this.setState({
        filteredData1: res,
      })
      console.log(this.state.filteredData1)
    });
  }

  render() {
    var someDate = new Date();
    var numberOfDaysToAdd = 3;
    var date = someDate.setDate(someDate.getDate() + numberOfDaysToAdd); 
    return (
      <div className="BodyData">
        <p className="Title">Quel est votre trajet ?</p>
        <div className="SearchForm1">
          <form onSubmit={this.handleSubmit}>
            <FormGroup controlId="departureStation" bsSize="large">
              <FormControl
                autoFocus
                type="text"
                placeholder ="Saisissez votre départ..."
                value={this.state.query1}
                onChange={this.handleInputChange1}
              />
            </FormGroup>
          </form>
          <div className="SearchData">{this.state.filteredData1.map(i => <strong><p /*onClick={this.handleInputChange1}*/ key={i.city_id}>{i.unique_name}</p></strong>)}</div>
        </div>
        <div className="SearchForm2">
          <form>
            <FormGroup controlId="arrivalStation" bsSize="large">
              <FormControl
                type="text"
                placeholder ="Saisissez votre arrivée..."
                value={this.state.query2}
                onChange={this.handleInputChange2}
              />
            </FormGroup>
          </form>
          <div className="SearchData">{this.state.filteredData2.map(it => <strong><p key={it.city_id}>{it.unique_name}</p></strong>)}</div>
        </div>
        <div className="ToGoTrip">
          <label for="toGo-time">Aller :</label>
            <input id="toGo-time" type="datetime-local" name="dateRequired" defaultValue={date} />
        </div>
        <div className="ReturnTrip">
          <label for="return-time">Retour :</label>
            <input id="return-time" type="datetime-local" name="dateRequired" defaultValue={date} />
        </div>
        <Button
          className="btn btn-outline-primary col-sm-2 bot"
          block
          bsSize="large"
          type="submit"
        >
          Valider
        </Button>
      </div>
    );
  }
}