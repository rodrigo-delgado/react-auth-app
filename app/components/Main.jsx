const React = require('react')



var Main = (props) => {
  return (
    <div>
      <div className='row'>
        <div className='column small-centered medium-6 large-4'>
          <h1>Here is mani</h1>

          {props.children}
        </div>
      </div>
    </div>
  )
}

module.exports = Main
