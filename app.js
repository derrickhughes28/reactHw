//1
const JSX = <h1>Hello JSX!</h1>;
//2
const JSX = <div>
  <h1>Heading.</h1>
  <p>Paragraph</p>
 <ul>
  <li>ME</li>
  <li>YOU</li>
  <li>THEM</li>
</ul>
</div>;  
//3
const JSX = (
    <div>
    {/*woooooo*/}
      <h1>This is a block of JSX</h1>
      <p>Here's a subtitle</p>
    </div>
  );
//4
const JSX = (
    <div>
      <h1>Hello World</h1>
      <p>Lets render this to the DOM</p>
    </div>
  );
  ReactDOM.render(JSX, document.getElementById("challenge-node"));
//5
const JSX = (
    <div className='myDiv'>
      <h1>Add a class to this div</h1>
    </div>
  );
//6
const JSX = (
    <div>
      <h2>Welcome to React!</h2> <br />
      <p>Be sure to close all tags!</p>
      <hr />    
    </div>
  );
//7
const MyComponent = function() {
    return(
        <div>Completed challenge!</div>
    );
    }    
//8
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
         <h1>Hello React!</h1>
        </div>
      );
    }
  };
//9
const ChildComponent = () => {
    return (
      <div>
        <p>I am the child</p>
      </div>
    );
  };
  class ParentComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>I am the parent</h1>
          <ChildComponent />
        </div>
      );
    }
  };  
//10
const TypesOfFruit = () => {
    return (
      <div>
        <h2>Fruits:</h2>
        <ul>
          <li>Apples</li>
          <li>Blueberries</li>
          <li>Strawberries</li>
          <li>Bananas</li>
        </ul>
      </div>
    );
  };
  const Fruits = () => {
    return (
      <div>    
        <TypesOfFruit/>
      </div>
    );
  };
  class TypesOfFood extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
            <Fruits/>
        </div>
      );
    }
  };
//11
class Fruits extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h2>Fruits:</h2>
          <NonCitrus />
          <Citrus />
        </div>
      );
    }
  };
  class TypesOfFood extends React.Component {
    constructor(props) {
       super(props);
    }
    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
          <Fruits />
          <Vegetables />
        </div>
      );
    }
  };
//12
class TypesOfFood extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>Types of Food:</h1>
          <Fruits />
          <Vegetables />
        </div>
      );
    }
  };
  ReactDOM.render(<TypesOfFood />, document.getElementById('challenge-node'))
//13
class MyComponent extends React.Component{
    constructor(props){
      super(props);
    }
    render(){
      return(
            <div id="challenge-node">
                   <h1>My First React Component!</h1>
            </div>
      );
    }
  };
  ReactDOM.render(<MyComponent/>, document.getElementById("challenge-node"));
//14
const CurrentDate = (props) => {
    return (
      <div>
        <p>The current date is: {props.date}</p>
      </div>
    );
  };
  class Calendar extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h3>What date is it?</h3>
          <CurrentDate date={Date()} />
        </div>
      );
    }
  };
//15
const List = props => {
    return <p>{props.tasks.join(", ")}</p>;
  };
  class ToDo extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>To Do Lists</h1>
          <h2>Today</h2>
          <List tasks={["Walk", "Cook", "Bake"]} />
          <h2>Tomorrow</h2>
          <List tasks={["Study", "Code", "Eat"]} />
        </div>
      );
    }
  }  
//16
const ShoppingCart = (props) => {
    return (
      <div>
        <h1>Shopping Cart Component</h1>
      </div>
    )
  };
  ShoppingCart.defaultProps = {
    items: 0
  };
//17
const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
  }
  Items.defaultProps = {
    quantity: 0
  }
  class ShoppingCart extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <Items quantity={10}/>
    }
  };const Items = (props) => {
    return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
  };
  Items.propTypes = {
    quantity: PropTypes.number.isRequired
  };
  Items.defaultProps = {
    quantity: 0
  };
  class ShoppingCart extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <Items />
    }
  };  
//18
class ReturnTempPassword extends React.Component {
    constructor(props) {
      super(props);
  
    }
    render() {
      return (
          <div>
          <p>Your temporary password is: <strong>{this.props.tempPassword}</strong></p>
              { /* Change code above this line */ }
          </div>
      );
    }
  };
  class ResetPassword extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
          <div>
            <h2>Reset Password</h2>
            <h3>We've generated a new temporary password for you.</h3>
            <h3>Please reset this password from your account settings ASAP.</h3>
  <ReturnTempPassword tempPassword="xxxxxxxx" />
          </div>
      );
    }
  };  
//19
class CampSite extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <Camper/>
        </div>
      );
    }
  };
  const Camper = props => <p>{props.name}</p>;
  Camper.defaultProps = {
    name: "CamperBot"
  };
  Camper.propTypes = {
    name: PropTypes.string.isRequired
  };
//20
class StatefulComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name : "Derrick"
      }
    }
    render() {
      return (
        <div>
          <h1>{this.state.name}</h1>
        </div>
      );
    }
  };
//21
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'freeCodeCamp'
      }
    }
    render() {
      return (
        <div>
          <h1>{this.state.name}</h1>
        </div>
      );
    }
  };
//22
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'freeCodeCamp'
      }
    }
    render() {
      const name = this.state.name;
      return (
        <div>
            <h1>{name}</h1>
        </div>
      );
    }
  };
//23
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: 'Initial State'
      };
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      this.setState({
        name: 'React Rocks!'
      });
    }
    render() {
      return (
        <div>
          <button onClick={this.handleClick}>Click Me</button>
          <h1>{this.state.name}</h1>
        </div>
      );
    }
  };
//24
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        text: "Hello"
      };
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      this.setState({
        text: "You clicked!"
      });
    }
    render() {
      return (
        <div>
          <button onClick = {this.handleClick}>Click Me</button>
          <h1>{this.state.text}</h1>
        </div>
      );
    }
  };
//25
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        visibility: false
      };
      this.toggleVisibility = this.toggleVisibility.bind(this);
    }
    toggleVisibility() {
      this.setState(state => {
        if (state.visibility === true) {
           return { visibility: false };
         } else {
           return { visibility: true };
        }
      });
    }
    render() {
      if (this.state.visibility) {
        return (
          <div>
            <button onClick={this.toggleVisibility}>Click Me</button>
            <h1>Now you see me!</h1>
          </div>
        );
      } else {
        return (
          <div>
            <button onClick={this.toggleVisibility}>Click Me</button>
          </div>
        );
      }
    }
  };
//26
class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
    this.reset = this.reset.bind(this);
   }
    reset() {
      this.setState({
        count: 0
      });
    }
    increment() {
      this.setState(state => ({
        count: state.count + 1
      }));
    }
    decrement() {
      this.setState(state => ({
        count: state.count - 1
      }));
    }
    render() {
      return (
        <div>
          <button className='inc' onClick={this.increment}>Increment!</button>
          <button className='dec' onClick={this.decrement}>Decrement!</button>
          <button className='reset' onClick={this.reset}>Reset</button>
          <h1>Current Count: {this.state.count}</h1>
        </div>
      );
    }
  };  
//27
class ControlledInput extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: ''
      };
      this.handleChange = this.handleChange.bind(this);
    }
      handleChange(event){
      this.setState({input: event.target.value});
      }
    render() {
      return (
        <div>
           <input value = {this.state.input} onChange = {this.handleChange.bind(this)}/>
          <h4>Controlled Input:</h4>
          <p>{this.state.input}</p>
        </div>
      );
    }
  };
//28
class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        submit: ''
      };
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
      this.setState({
        input: event.target.value
      });
    }
    handleSubmit(event) {
      event.preventDefault()
      this.setState({
        submit: this.state.input
      });
    }
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <input
              value={this.state.input}
              onChange={this.handleChange} />
            <button type='submit'>Submit!</button>
          </form>
          <h1>{this.state.submit}</h1>
        </div>
      );
    }
  };
//29
class MyApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: "CamperBot"
      };
    }
    render() {
      return (
        <div>
          <Navbar name={this.state.name} />
        </div>
      );
    }
  }
  class Navbar extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h1>Hello, my name is: {this.props.name}</h1>
        </div>
      );
    }
  }
//30
class MyApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        inputValue: ''
      }
    this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
      this.setState({
        inputValue: event.target.value
      });
    }
    render() {
      return (
         <div>
           <GetInput
             input={this.state.inputValue}
             handleChange={this.handleChange}/>
           <RenderInput
             input={this.state.inputValue}/>
         </div>
      );
    }
  };
  class GetInput extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h3>Get Input:</h3>
          <input
            value={this.props.input}
            onChange={this.props.handleChange}/>
        </div>
      );
    }
  };
  class RenderInput extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h3>Input Render:</h3>
          <p>{this.props.input}</p>
        </div>
      );
    }
  };
//31
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
    }
    componentWillMount() {
  console.log('Component being mounted');
    }
    render() {
      return <div />
    }
  };  
//32
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        activeUsers: null
      };
    }
    componentDidMount() {
      setTimeout(() => {
        this.setState({
          activeUsers: 1273
        });
      }, 2500);
    }
  render() {
      return (
        <div>
          <h1>Active Users: { this.state.activeUsers }</h1>
        </div>
      );
    }
  }  
//33
class OnlyEvens extends React.Component {
    constructor(props) {
      super(props);
    }
    shouldComponentUpdate(nextProps, nextState) {
      console.log('Should I update?');
        if (nextProps.value % 2 == 0) {
          return true;
        }
        return false;
    }
    componentWillReceiveProps(nextProps) {
      console.log('Receiving new props...');
    }
    componentDidUpdate() {
      console.log('Component re-rendered.');
    }
    render() {
      return <h1>{this.props.value}</h1>
    }
  };
  class Controller extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 0
      };
      this.addValue = this.addValue.bind(this);
    }
    addValue() {
      this.setState({
        value: this.state.value + 1
      });
    }
    render() {
      return (
        <div>
          <button onClick={this.addValue}>Add</button>
          <OnlyEvens value={this.state.value}/>
        </div>
      );
    }
  };
//34
class Colorful extends React.Component {
    render() {
      return (
        <div style={{ color: 'red', fontSize: '72'}}>
          Big Red
        </div>
      );
    }
  };
//35
const styles = {
    color: 'purple',
    fontSize: 40,
    border: "2px solid purple",
  };
  class Colorful extends React.Component {
    render() {
      return (
        <div style={styles}>Style Me!</div>
      );
    }
  };
//36
const inputStyle = {
    width: 235,
    margin: 5
  };
  
  class MagicEightBall extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        userInput: '',
        randomIndex: ''
      };
      this.ask = this.ask.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }
    ask() {
      if (this.state.userInput) {
        this.setState({
          randomIndex: Math.floor(Math.random() * 20),
          userInput: ''
        });
      }
    }
    handleChange(event) {
      this.setState({
        userInput: event.target.value
      });
    }
    render() {
      const possibleAnswers = [
        'It is certain',
        'It is decidedly so',
        'Without a doubt',
        'Yes, definitely',
        'You may rely on it',
        'As I see it, yes',
        'Outlook good',
        'Yes',
        'Signs point to yes',
        'Reply hazy try again',
        'Ask again later',
        'Better not tell you now',
        'Cannot predict now',
        'Concentrate and ask again',
        "Don't count on it",
        'My reply is no',
        'My sources say no',
        'Most likely',
        'Outlook not so good',
        'Very doubtful'
      ];
    const answer = possibleAnswers[this.state.randomIndex];
      return (
        <div>
          <input
            type='text'
            value={this.state.userInput}
            onChange={this.handleChange}
            style={inputStyle}
          />
          <br />
          <button onClick={this.ask}>Ask the Magic Eight Ball!</button>
          <br />
          <h3>Answer:</h3>
          <p>
  <p>
    {answer}          
  </p>
  
          </p>
        </div>
      );
    }
  }  
//37
const inputStyle = {
    width: 235,
    margin: 5
  };
  class MagicEightBall extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        userInput: '',
        randomIndex: ''
      };
      this.ask = this.ask.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }
    ask() {
      if (this.state.userInput) {
        this.setState({
          randomIndex: Math.floor(Math.random() * 20),
          userInput: ''
        });
      }
    }
    handleChange(event) {
      this.setState({
        userInput: event.target.value
      });
    }
    render() {
      const possibleAnswers = [
        'It is certain',
        'It is decidedly so',
        'Without a doubt',
        'Yes, definitely',
        'You may rely on it',
        'As I see it, yes',
        'Outlook good',
        'Yes',
        'Signs point to yes',
        'Reply hazy try again',
        'Ask again later',
        'Better not tell you now',
        'Cannot predict now',
        'Concentrate and ask again',
        "Don't count on it",
        'My reply is no',
        'My sources say no',
        'Most likely',
        'Outlook not so good',
        'Very doubtful'
      ];
    const answer = possibleAnswers[this.state.randomIndex]; 
      return (
        <div>
          <input
            type='text'
            value={this.state.userInput}
            onChange={this.handleChange}
            style={inputStyle}
          />
          <br />
          <button onClick={this.ask}>Ask the Magic Eight Ball!</button>
          <br />
          <h3>Answer:</h3>
          <p> 
    {answer}          
          </p>
        </div>
      );
    }
  }  
//38
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        display: true
      }
   this.toggleDisplay = this.toggleDisplay.bind(this);
   }
    toggleDisplay() {
      this.setState({
        display: !this.state.display
      });
    }
    render() {
      if (this.state.display) {
        return (
           <div>
             <button onClick={this.toggleDisplay}>Toggle Display</button>
             <h1>Displayed!</h1>
           </div>
        );
      } else {
        return (
          <div>
             <button onClick={this.toggleDisplay}>Toggle Display</button>
           </div>
        );
      }
    }
  };
//39
class MyComponent extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        display: true
      }
   this.toggleDisplay = this.toggleDisplay.bind(this);
    }
    toggleDisplay() {
      this.setState(state => ({
        display: !state.display
      }));
    }
    render() {
      return (
         <div>
           <button onClick={this.toggleDisplay}>Toggle Display</button>
           {this.state.display && <h1>Displayed!</h1>}
         </div>
      );
    }
  };
//40
const inputStyle = {
    width: 235,
    margin: 5
  }
  class CheckUserAge extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        userAge: '',
        input: ''
      }
      this.submit = this.submit.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
      this.setState({
        input: e.target.value,
        userAge: ''
      });
    }
    submit() {
      this.setState(state => ({
        userAge: state.input
      }));
    }
    render() {
      const buttonOne = <button onClick={this.submit}>Submit</button>;
      const buttonTwo = <button>You May Enter</button>;
      const buttonThree = <button>You Shall Not Pass</button>;
      return (
        <div>
          <h3>Enter Your Age to Continue</h3>
          <input
            style={inputStyle}
            type="number"
            value={this.state.input}
            onChange={this.handleChange} /><br />
            {
            this.state.userAge === ''
              ? buttonOne
              : this.state.userAge >= 18
                ? buttonTwo
                : buttonThree
            }
        </div>
      );
    }
  };
//41
class Results extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <h1>
        {this.props.fiftyFifty ? "You Win!" : "You Lose!"}
        </h1>
      )
    };
  };
  class GameOfChance extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: 1
      }
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
      this.setState({
        counter: this.state.counter + 1 
      });
    }
    render() {
      const expression = Math.random() >= 0.5 ? true : false
      return (
        <div>
          <button onClick={this.handleClick}>Play Again</button>
          <Results fiftyFifty={expression} />
          <p>{'Turn: ' + this.state.counter}</p>
        </div>
      );
    }
  };
//42
class GateKeeper extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: ''
      };
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
      this.setState({ input: event.target.value })
    }
    render() {
      let inputStyle = {
        border: '1px solid black'
      };
      if (this.state.input.length > 15) {
        inputStyle.border = '3px solid red';
      }
      return (
        <div>
          <h3>Don't Type Too Much:</h3>
          <input
            type="text"
            style={inputStyle}
            value={this.state.input}
            onChange={this.handleChange} />
        </div>
      );
    }
  };
//43
class GateKeeper extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: ''
      };
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
      this.setState({ input: event.target.value })
    }
    render() {
      let inputStyle = {
        border: '1px solid black'
      };
      if (this.state.input.length > 15) {
        inputStyle.border = '3px solid red';
      }
      return (
        <div>
          <h3>Don't Type Too Much:</h3>
          <input
            type="text"
            style={inputStyle}
            value={this.state.input}
            onChange={this.handleChange} />
        </div>
      );
    }
  };