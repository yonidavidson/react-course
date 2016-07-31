import 'normalize.css/normalize.css';
import 'assets/stylesheets/main.scss';

import { render } from 'react-dom';

const Header = ({text}) => (<h1>{text}</h1>)
const Recipe = ({name}) => (<li>{name}</li>)
const Recipes = ({recipes}) => (
	<ul>
	{
	recipes.map(recipe => <Recipe key={recipe} name={recipe} />)
	}
	</ul>
);
const App = () => {
const recipes = ['Waffels','Omelette','juice']
return(
	<div>
	 <div>
	 	<Header text="Recipes" />
	 	<Recipes recipes={recipes}/>	
	 </div>	
	</div>
)
}

render(
  React.createElement(App),
  document.getElementById('app')
);
