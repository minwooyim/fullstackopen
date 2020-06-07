import React from 'react'

const Header = ({ courses }) => {
    console.log('Header information is:', courses)

    return (
      <h1>
            {courses.name}
      </h1>
    )
  }

export default Header