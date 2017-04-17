import React from 'react'
import { Link } from 'react-router-dom'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

const Question1 = () =>(
  <div>
    <p>How old are you?</p>
    <input>age</input>
  </div>
)

class Questions extends React.Component {

  render(){
    return (
        <div>
          {Question1}
          <h1>fsdfsdf</h1>
        </div>
    )
  }
}


export default Questions

// const question2
// const question3
// const question4
// const question5
// const question6
// const question7
// const question8
// const question9
// const question10
// <Router>
// <Route path="/question/1"      component={Question1} />
// </Router>
