import React from 'react'
import ReactDOM from 'react-dom'



const Header = (props) => {
  //
  return (
      <h1>{props.inputCourse}</h1>
  )
}

const Content = (props) => {
  //
  return (
      <div>
        <Part singlePart={props.inputPart} singleExercise={props.inputExercises}/>
      </div>
  )
}

const Part = (props) => {
  //
  return (
      <p>{props.singlePart}{props.singleExercise}</p>
  )
}

const Total = (props) => {
  //
  return (
    <p>Number of exercises {props.inputExercises1+props.inputExercises2+props.inputExercises3}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header inputCourse={course}/>
      <Content inputPart={part1} inputExercises={exercises1} />
      <Content inputPart={part2} inputExercises={exercises2} />
      <Content inputPart={part3} inputExercises={exercises3} />
      <Total inputExercises1={exercises1} inputExercises2={exercises2} inputExercises3={exercises3}/>
    </div>>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))