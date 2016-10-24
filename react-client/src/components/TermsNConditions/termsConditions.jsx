// class App extends React.Component {
//   constructor(props) {
//     super();
//     this.state = {};
//     //anytime you bind a function to this - do it here in this way -
//     // bind only runs once on intializations, and not each render
//     this.intitialize = this.intitialize.bind(this);
//   }
//   intitialize() {
//   }
//   componentWillMount() {
//     this.intitialize();
//   }
//   render() {
//     if (datadoesntexist) {
//       return (
//         <div>Pending Results</div>
//       );
//     }
//     return (
//       <firschild />
//     );
//   }
// }