import React from 'react';
import ReactDOM from 'react-dom';
import firstChild from './components/somePage.jsx';

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {};
    //anytime you bind a function to this - do it here in this way -
    // bind only runs once on intializations, and not each render
    this.intitialize = this.intitialize.bind(this);
  }
  intitialize() {
    return new Promise(function(resolve, reject) {
      $.get(someUrl, function(data) {
        resolve(data);
      });
    });
  }
  componentWillMount() {
    var that = this;
    this.intitialize().then(function(data) {
      that.setState({somethingWithData});
    });
  }
  render() {
    if (datadoesntexist) {
      return (
        <div>Pending Results</div>
      );
    }
    return (
      <firschild />
    );
  }
}