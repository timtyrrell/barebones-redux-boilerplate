import { connect } from 'react-redux'
import { addThing } from '../actions'
import Default from '../components/Default'

const mapStateToProps = (state) => {
  return {
    text: state.defaultSomething.text
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDefaultClick: (text) => {
      dispatch(addThing('hi'))
    }
  }
}

const DefaultContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Default)

export default DefaultContainer;
