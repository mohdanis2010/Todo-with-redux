import { connect } from 'react-redux'
import Link from '../components/Link'
import { setVisibilityFilter } from '../actions/actions'

// defining map functions before
const mapStateToProps = (state, ownProps) => ({
  active: state.visibilityFilter === ownProps.filter,
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick() {
    dispatch(setVisibilityFilter(ownProps.filter))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Link)
