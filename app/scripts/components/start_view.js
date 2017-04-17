import React from 'react'
import { Link, Redirect } from 'react-router-dom'


class Start extends React.Component {

  render () {
    return (
      <main>
        <h3>Welcome to my Survey!</h3>
        <p>On this page you will find 10 questions. Please answer each one.</p>
        <ul>
          <li>Question 1 Link</li>
          <li>Question 2 Link</li>
          <li>Question 3 Link</li>
          <li>Question 4 Link</li>
          <li>Question 5 Link</li>
          <li>Question 6 Link</li>
          <li>Question 7 Link</li>
          <li>Question 8 Link</li>
          <li>Question 9 Link</li>
          <li>Question 10 Link</li>
        </ul>
        <Link to="/question/1">Start!</Link>
      </main>
    );
  }
}

export default Start
