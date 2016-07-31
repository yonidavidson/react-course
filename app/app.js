import 'normalize.css/normalize.css';
import 'assets/stylesheets/main.scss';

import { render } from 'react-dom';

const Recipe = ({ recipe }) => (
  <li>{ recipe }</li>
);

const Recipes = ({ recipes }) => (
  <ul>
    { recipes.map(recipe => <Recipe key={ recipe } recipe={ recipe } /> )}
  </ul>
);

class UpdateRecipe extends React.Component{
	render(){
		return(
			<form onSubmit={ this.onSubmit.bind(this) }>
          		<input ref="title" type="text"/>
          		<button>Add</button>
    		</form>
		)
	}
    onSubmit(e) {
	    e.preventDefault();
	    this.props.addRecipe(this.refs.title.value)
	    this.refs.title.value = '';
  	}
}

const recipes = ['Waffles', 'Omelette'];

class App extends React.Component {
  constructor() {
    super();
    this.state = { recipes };
  }

  render() {
    return (
      <div>
        <h1>Recipes:</h1>
        <Recipes recipes={ this.state.recipes }/>
        <UpdateRecipe addRecipe={this.addRecipe.bind(this)}/>
      </div>
    );
  }

  addRecipe(recipe){
  	this.setState( { recipes: this.state.recipes.concat(recipe) } );
  }
}//end off App

render(
  React.createElement(App),
  document.getElementById('app')
);
