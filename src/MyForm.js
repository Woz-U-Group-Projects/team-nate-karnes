import React from 'react';
import { Form, Label, Input, Col, Row } from 'reactstrap';
import DataSelect from './DataSelect';

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
            weekdaySelect: '',
            monthSelect: '',
            daySelect: '',
            yearSelect: '',
            weatherSelect: '',
            holidaySelect: '',
        };
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleChange(event) {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
  }


  render() {
        return (
                <div>
                <Form>

                <br></br>

{/* Weekday */}
        
          <Label><h6>Weekday</h6></Label>
          <Input  type="select" 
                  name="weekdaySelect" 
                  id="weekdaySelect" 
                  value={this.state.weekdaySelect} 
                  onChange={this.handleChange}>
          <option value="">Select</option>
          <option id="sunday" value="Sunday">Sunday</option>
          <option id="monday" value="Monday">Monday</option>
          <option id="tuesday" value="Tuesday">Tuesday</option>
          <option id="wednesday" value="Wednesday">Wednesday</option>
          <option id="thursday" value="Thursday">Thursday</option>
          <option id="friday" value="Friday">Friday</option>
          <option id="saturday" value="Saturday">Saturday</option>
          </Input>
        <br></br>

{/* Month */}
        
          <Label><h6>Month</h6></Label>
          <Input  type="select" 
                  name="monthSelect" 
                  id="monthSelect"
                  value={this.state.monthSelect} 
                  onChange={this.handleChange}>
          <option value="">Select</option>
          <option id="january" value="January">January</option>
          <option id="february" value="February">February</option>
          <option id="march" value="March">March</option>
          <option id="april" value="April">April</option>
          <option id="may" value="May">May</option>
          <option id="june" value="June">June</option>
          <option id="july" value="July">July</option>
          <option id="august" value="August">August</option>
          <option id="september" value="September">September</option>
          <option ide="october" value="October">October</option>
          <option id="november" value="November">November</option>
          <option id="december" value="December">December</option>
          </Input>
        <br></br>

{/* Day */}
        
          <Label><h6>Day</h6></Label>
          <Input  type="select" 
                  name="daySelect" 
                  id="daySelect"
                  value={this.state.daySelect} 
                  onChange={this.handleChange}>
          <option value="">Select</option>
          <option id="1" value="1">1</option>
          <option id="2" value="2">2</option>
          <option id="3" value="3">3</option>
          <option id="4" value="4">4</option>
          <option id="5" value="5">5</option>
          <option id="6" value="6">6</option>
          <option id="7" value="7">7</option>
          <option id="8" value="8">8</option>
          <option id="9" value="9">9</option>
          <option id="10" value="10">10</option>
          <option id="11" value="11">11</option>
          <option id="12" value="12">12</option>
          <option id="13" value="13">13</option>
          <option id="14" value="14">14</option>
          <option id="15" value="15">15</option>
          <option id="16" value="16">16</option>
          <option id="17" value="17">17</option>
          <option id="18" value="18">18</option>
          <option id="19" value="19">19</option>
          <option id="20" value="20">20</option>
          <option id="21" value="21">21</option>
          <option id="22" value="22">22</option>
          <option id="23" value="23">23</option>
          <option id="24" value="24">24</option>
          <option id="25" value="25">25</option>
          <option id="26" value="26">26</option>
          <option id="27" value="27">27</option>
          <option id="28" value="28">28</option>
          <option id="29" value="29">29</option>
          <option id="30" value="30">30</option>
          <option id="31" value="31">31</option>
          </Input>
        <br></br>

{/* Year */}
        
          <Label><h6>Year</h6></Label>
          <Input  type="select" 
                  name="yearSelect" 
                  id="yearSelect"
                  value={this.state.yearSelect} 
                  onChange={this.handleChange}>
          <option value="">Select</option>
          <option id="2018" value="2018">2018</option>
          <option id="2019" value="2019">2019</option>
          <option id="2020" value="2020">2020</option>
          <option id="2021" value="2021">2021</option>
          <option id="2022" value="2022">2022</option>
          <option id="2023" value="2023">2023</option>
          <option id="2024" value="2024">2024</option>
          <option id="2025" value="2025">2025</option>
          </Input>
        <br></br>

{/* Weather */}
        
        <DataSelect url="http://localhost:5000/weathers" id="weatherSelect" onChange={this.handleChange} label="Weather" />
       <br></br>

{/* Holiday/Special Day */}
         <DataSelect url="http://localhost:5000/holidays" id="holidaySelect" onChange={this.handleChange} label="Holiday/Special Day" />
       <br></br>
        
        </Form>

<br></br>
<Row>
  <Col><h5>Weekday</h5><br></br><div className="DisplayFont">{this.state.weekdaySelect}</div></Col>
  <Col><h5>Month</h5><br></br><div className="DisplayFont">{this.state.monthSelect}</div></Col>
  <Col><h5>Day</h5><br></br><div className="DisplayFont">{this.state.daySelect}</div></Col>
  <Col><h5>Year</h5><br></br><div className="DisplayFont">{this.state.yearSelect}</div></Col>
  <Col><h5>Weather</h5>{ this.state.weatherSelect ?  <img width="120" src={"/images/" + this.state.weatherSelect + ".png"} alt={this.state.weatherSelect} /> : <br/> }</Col>
  <Col><h5>Holiday</h5>{ this.state.holidaySelect ?  <img width="120" src={"/images/" + this.state.holidaySelect + ".png"} alt={this.state.holidaySelect} /> : <br/> }</Col>
</Row>
  </div>
        );


        

  }
  
}


