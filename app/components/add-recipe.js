import { connect } from 'react-redux';
import { addRecipe } from 'actions/recipes';

class AddRecipe extends React.Component {
  render() {
    return (
      <form onSubmit={ this.onSubmit.bind(this) }>
        <input ref="title" type="text"/>
        <button>Add</button>
      </form>
    );
  }

  onSubmit(e) {
    e.preventDefault();

    this.props.addRecipe(this.refs.title.value);

    this.refs.title.value = '';
  }
}

AddRecipe.propTypes = {
  addRecipe: React.PropTypes.func.isRequired
};

export default connect(null, { addRecipe })(AddRecipe);