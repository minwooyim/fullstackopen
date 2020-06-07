import React from 'react'

const Part = (props) => {
    console.log('1 Part props is', props)

    let { name , exercises } = props

    return (
      <p>
        {name} {exercises}
      </p>    
    )
  }

export default Part