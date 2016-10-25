( 
  <div>
    <input
           id = ""
           className = "termsConditions"
           type="text"
           placeholder="commitment type!"
           onChange={props.handleChange}
    />
    <div>
      <input
           id = ""
           className = "termsConditions"
           type="text"
           placeholder="commitment type!"
           onChange={props.handleChange}
      />
    </div>
  </div>
)

( //  _____________INPUT TEXTBOX_______________
  // this can be used for any input box and resized with css
  // we can expect to pass data from the input to our state using id
  // - handleChange handleSubmit
  <input
          id = "" //this will be the key in the key:value of state
          className = "tripReturn" //this will be for css
          type="text" // text submission
          placeholder="Hello!" //greyed out text
          onChange={props.handleChange}
  />
)

( // _______________INPUT SUBMIT BUTTON________________
  // can be expected to submit the current text within an input box
  // to the data aggregate that will be passed to DB
  <button onClick={props.handleSubmit}>
    Submit
  </button>
)

(

)




//_______________GenericSmartComponent______________
class App extends React.Component {
  constructor(props) {
    super();
    this.state = {};
    //anytime you bind a function to this - do it here in this way -
    // bind only runs once on intializations, and not each render
    this.anyFunction = this.anyFunction.bind(this);
  }
  anyFunction() {
  
  }
  render() {

}
// ___________________GenericPureComponent___________________
// many of these can be rendered by smart or other pure components
// smart components can pass their state down through props that can be activated
// through an event such as submit, click, and change
var Description = (props) => {
  return (
    <div className="desc-container">
      <h4>Description</h4>
      <div>
        <input
          id = "someId"
          className = "SomeClass"
          type="text"
          placeholder="GreyedOutText!"
          onChange={props.handleChange}
        />
      <button id="sameIdAsAbove" onClick={props.handleSubmit}>
        Save
      </button>
      </div>
    </div>
  )
}

  // _________________GenericPromiseGetRequest_________________
  // this can be expected to take a url and pass it to a promisified get request
  // functionName().then(function(data) { ~~manipulate data here~~ })
functionName() {
    return new Promise(function(resolve, reject) {
      $.get(someUrl, function(data) {
        resolve(data);
      });
    });
}
