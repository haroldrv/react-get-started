import React from 'react';
import Heart from './heart';

/**
 * Class-based components can have state (stateful components)
 */
class App extends React.Component {

  constructor(){
    super();
    this.state = {
      txt: 'this is the state text'
    };
  }

  update(e){
    console.log('update is being called');
    this.setState({
      txt: e.target.value
    });
  }

  render() {
    return (
      <div>
        <Button foo={'bar'}>I <Heart /> React</Button>
      </div>
    )
  }
}

/**
 * Function based compoments have not state (stateless compoments)
 * However, properties can be passed into them (called props)
 * @param {*} props 
 */
const Button = (props) => {
  console.log('properties being passed from parent component', props);
  return (
    <div>
      <button>{props.children}</button>
      <span>{props.foo}</span>
    </div>
  )
}
  

/**
 * Stateless compoment
 * @param {*} props 
 */
const Widget = (props) =>
  <input type="text" onChange={props.update}></input>

// We only export what we want to be publicly available
export default App