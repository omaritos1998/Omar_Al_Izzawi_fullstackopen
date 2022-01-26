import React from 'react'



const Header = (props) => {
  
  return (
    <h1>
     {props.course}
    </h1>
  )
}

const Content = (props) => {

  
  const parts = props.parts;
  const contentList = parts.map((part) =>
    <li key={part.exercises}>{part.name} {part.exercises}</li> 
  );

  return (
    <ul>
      {contentList}
    </ul>
  )
}

const Total = (props) => {
  const sum = props.parts.reduce((x,y) =>  x = x + y.exercises , 0 )
  return (
    <p>
     Number of exercises {sum}
    </p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
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
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App