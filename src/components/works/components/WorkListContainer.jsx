import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { fetchWorks } from '../actions'
import WorkList from './WorkList'

export class WorkListContainer extends Component {
  componentDidMount() {
    this.props.fetchWorks()
  }

  render() {
    const { isFetching, result } = this.props.works
    const isLoading = result.length === 0 && isFetching

    return <WorkList ids={result} isLoading={isLoading} />
  }
}

WorkListContainer.propTypes = {
  fetchWorks: PropTypes.func.isRequired,
  works: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  works: state.works
})

export default connect(mapStateToProps, { fetchWorks })(WorkListContainer)
