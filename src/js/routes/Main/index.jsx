import {connect} from 'react-redux'
import MyComponent from 'MyComponent'
import React, {Component} from 'react'
import './_styles.scss'

class Main extends Component {
  render () {
    return (
      <div className='row center-xs'>
        <div styleName='container'>
          Hello World
        </div>
        <MyComponent />
      </div>
    )
  }
}

const mapStateToProps = function (store) {
  return {}
}

export default connect(mapStateToProps)(Main)
