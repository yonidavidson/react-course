import { connect } from 'react-redux';
import { addRecipe } from 'actions/recipes';

class AddRecipe extends React.Component {
  render() {
    return (
      <form onSubmit={ this.onSubmit.bind(this) }>
        <div>
          <div>Title</div>
          <input ref="title" type="text"/>
        </div>

        <div>
          <div>Description</div>
          <textarea ref="description" type="text"/>
        </div>

        <button>Add</button>
      </form>
    );
  }

  onSubmit(e) {
    e.preventDefault();

    this.props.addRecipe(
      this.refs.title.value,
      this.refs.description
    );

    this.refs.title.value = '';
    this.refs.description.value = '';
  }
}

AddRecipe.propTypes = {
  addRecipe: React.PropTypes.func.isRequired
};

export default connect(null, { addRecipe })(AddRecipe);