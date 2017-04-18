import React from 'react'
import { Link } from 'react-router-dom'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'



const Question1 = () => (<div>
                  <p>How old are you?</p>
                  <input placeholder="type in your answer" type="text"></input>
                  <button>Submit Answer</button>
                  <Link to="/question/2">Next Question</Link>
                  </div>)
const Question2 = () => (<div>
                  <p>What are you doing tonight?</p>
                  <input placeholder="type in your answer" type="text"></input>
                  <button>Submit Answer</button>
                  <Link to="/question/1">Previous Question</Link>
                  <Link to="/question/3">Next Question</Link>
                  </div>)
const Question3 = () => (<div>
                  <p>How many cups of water have you had today?</p>
                  <input placeholder="type in your answer" type="text"></input>
                  <button>Submit Answer</button>
                  <Link to="/question/2">Previous Question</Link>
                  <Link to="/question/4">Next Question</Link>
                  </div>)
const Question4 = () => (<div>
                  <p>How many cats do you currently own??</p>
                  <input placeholder="type in your answer" type="text"></input>
                  <button>Submit Answer</button>
                  <Link to="/question/3">Previous Question</Link>
                  <Link to="/question/5">Next Question</Link>
                  </div>)
const Question5 = () => (<div>
                  <p>Who is your Overwatch Main?</p>
                  <input placeholder="type in your answer" type="text"></input>
                  <button>Submit Answer</button>
                  <Link to="/question/4">Previous Question</Link>
                  <Link to="/question/6">Next Question</Link>
                  </div>)
const Question6 = () => (<div>
                  <p>In how many language can you do the FizzBuzz {`function`} in?</p>
                  <input placeholder="type in your answer" type="text"></input>
                  <button>Submit Answer</button>
                  <Link to="/question/5">Previous Question</Link>
                  <Link to="/question/7">Next Question</Link>
                  </div>)
const Question7 = () => (<div>
                  <p>If money and health was not an issue, what kind of Taco Bell item would you order?</p>
                  <input placeholder="type in your answer" type="text"></input>
                  <button>Submit Answer</button>
                  <Link to="/question/6">Previous Question</Link>
                  <Link to="/question/8">Next Question</Link>
                  </div>)
const Question8 = () => (<div>
                  <p>Why is Google Fiber available in the majority of the 78704 area but not mine?</p>
                  <input placeholder="type in your answer" type="text"></input>
                  <button>Submit Answer</button>
                  <Link to="/question/7">Previous Question</Link>
                  <Link to="/question/9">Next Question</Link>
                  </div>)
const Question9 = () => (<div>
                  <p>How much cheese is too much?</p>
                  <input placeholder="type in your answer" type="text"></input>
                  <button>Submit Answer</button>
                  <Link to="/question/8">Previous Question</Link>
                  <Link to="/question/10">Next Question</Link>
                  </div>)
// const Question10 = () => (<div>
//                   <p>What is your Social Security Number? You can trust me</p>
//                   <input placeholder="type in your answer" type="text"></input>
//                   <button>Submit Answer</button>
//                   <Link to="/question/9">Previous Question</Link>
//                   </div>)





class Questions extends React.Component {
  constructor(props){
    super(props)
    this.buttonClick = this.buttonClick.bind(this)
  }

  buttonClick(){
    console.log(input.value)
  }


  render(){

    return (
          <Router>
            <div className="questions">
              <Route path ="/question/1" component={Question1} />
              <Route path ="/question/2" component={Question2} />
              <Route path ="/question/3" component={Question3} />
              <Route path ="/question/4" component={Question4} />
              <Route path ="/question/5" component={Question5} />
              <Route path ="/question/6" component={Question6} />
              <Route path ="/question/7" component={Question7} />
              <Route path ="/question/8" component={Question8} />
              <Route path ="/question/9" component={Question9} />
              <Route path ="/question/10" component={Question10}  />
            </div>
          </Router>

    )
  }
}


export default Questions

class Question10 extends React.Component {
  constructor(props){
    super(props)
    this.buttonClick = this.buttonClick.bind(this)
  }

  buttonClick(){
    console.log(this.refs.answer.value)
  }
  render(){
    return (<div>
              <p>What is your Social Security Number? You can trust me</p>
              <input ref="answer" placeholder="type in your answer" type="text"></input>
              <button onClick={this.buttonClick}>Submit Answer</button>
              <Link to="/question/9">Previous Question</Link>
            </div>)
  }
}

// <Link to="/question/1">Question 1 Link</Link>
// <Link to="/question/2">Question 2 Link</Link>
// <Link to="/question/3">Question 3 Link</Link>
// <Link to="/question/4">Question 4 Link</Link>
// <Link to="/question/5">Question 5 Link</Link>
// <Link to="/question/6">Question 6 Link</Link>
// <Link to="/question/7">Question 7 Link</Link>
// <Link to="/question/8">Question 8 Link</Link>
// <Link to="/question/9">Question 9 Link</Link>
// <Link to="/question/10">Question 10 Link</Link>
// <Router>
// <Route path="/question/1"      component={Question1} />
// </Router>
// <button>Next Question</button>
// <button>Previous Question</button>


// buttonClick: function(){
//   store.dispatch(categories(this.refs.name.value))
// },
// render: function(){
//   return (
//   <div className="start-card">
//     <input
//     ref="name"
//     placeholder="what is your name?"
//     type="text">
//     </input>
//     <button
//     onClick={this.buttonClick}>Click to Submit Your Name
//     </button>
//   </div>)
// }
//
// })
// export default StartView
