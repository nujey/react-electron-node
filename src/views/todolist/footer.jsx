import React from 'react'
import FilterLink from './containers/filterLink'

function Footer() {
  return (
    <div>
      show: <FilterLink filter="SHOW_ALL">SHOW_ALL</FilterLink>{', '}
      <FilterLink filter="SHOW_ACTIVE">SHOW_AVTIVE</FilterLink>{', '}
      <FilterLink filter="SHOW_COMPLETED">SHOW_COMPLETED</FilterLink>
    </div>
  )
}

export default Footer
