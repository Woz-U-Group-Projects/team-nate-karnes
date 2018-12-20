import React from 'react';
import axios from 'axios';
import { Label, Input} from 'reactstrap';

export default class DataSelect extends React.Component {
    state = {
      list: []
    }
  
    componentDidMount() {
      axios.get(this.props.url)
        .then(res => {
    
          //console.log(res.data);
          this.setState({ list: res.data });
        })
    }
  
    render() {
      return (
        <div>
          <Label><h6>{this.props.label}</h6></Label>
          <Input  type="select" 
                  name={this.props.id}
                  id={this.props.id}
                  value={this.props.selectedValue} 
                  onChange={this.props.onChange}>
                  <option value="">Select</option>
          { this.state.list.map(item => <option value={item.name} key={item.name}>{item.label || item.name}</option>)}
          </Input>
        </div>
      )
    }
  }