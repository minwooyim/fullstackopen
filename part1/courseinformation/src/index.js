import React, { useState } from 'react'
import ReactDOM from 'react-dom'



const Header = (props) => {
  console.log(props)
  return (
      <h1>{props.inputCourse['name']}</h1>
  )
}

const Content = (props) => {
  console.log(props)
  return (
      <div>
        <Parts multipleParts={props.inputCourse}/>
      </div>
  )
}

const Parts = (props) => {
  console.log(props)
  return (
    <div>
      <p>{props.multipleParts['parts'][0]['name']}{props.multipleParts['parts'][0]['exercises']}</p>
      <p>{props.multipleParts['parts'][1]['name']}{props.multipleParts['parts'][1]['exercises']}</p>
      <p>{props.multipleParts['parts'][2]['name']}{props.multipleParts['parts'][2]['exercises']}</p>
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <p>Number of exercises {props.inputCourse['parts'][0]['exercises']}</p>
  )
}

const App = () => {

  const course = {
    name: 'Half Stack application development',
    parts : [
    {
      name: "Fundamentals of React",
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
}

  return (
    <div>
      <Header inputCourse={course}/>
      <Content inputCourse={course} />
      <Total inputCourse={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))