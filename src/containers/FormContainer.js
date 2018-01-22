import { connect } from 'react-redux';

import Form from '../components/Form';
import { addTodo } from '../actions';

function mapDispatchToProps(dispatch) {
  return {
    onAdd: text => dispatch(addTodo(text))
  };
}

const FormContainer = connect(null, mapDispatchToProps)(Form);

export default FormContainer;
