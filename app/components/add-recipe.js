import { connect } from 'react-redux'
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

//connecting
const mapStateToProps = (state) => ({
 // addRecipe: {}
});

const mapDispatchToProps = (dispatch) => ({
  addRecipe: (title) => dispatch({type:"UPDATE_RECIPE", title})
});


export default connect(mapStateToProps, mapDispatchToProps)(AddRecipe);