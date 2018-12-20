// import React from 'react';
// import { Form, Label, Input, Button, InputGroup, InputGroupAddon } from 'reactstrap';


// class Suggestion extends React.Component {
//     constructor (props) {
//         super(props);
//         this.state = {
//             inputvalue: ''
//         }
  
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
  
//     handleChange (event) {
//         this.setState({
//             inputvalue: event.target.value
//         })
//     }
  
//     handleSubmit (event) {
//         console.log('Form value: ' + this.state.inputvalue);
//         event.preventDefault();
//     }
  
//     render() {
//       return (
//         <div className="Suggestion">
// <Form onSubmit={this.handleSubmit}>
//     <Label><h6>Have a holiday or weather in mind, not listed? Send me a suggestion!</h6></Label>
//       <InputGroup>
//         <Input type="text" value={this.state.inputvalue} onChange={this.handleChange}/>
//         <InputGroupAddon addonType="append">
//         <Button color="secondary" type="submit" value="Submit">Submit</Button>
//         </InputGroupAddon>
//       </InputGroup>
// </Form>
//         </div>
//       );
//     }
//   }

//   export default Suggestion;