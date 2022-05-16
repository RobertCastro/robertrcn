import React from 'react'
import Card from './ListItem/Card'

const Listing = ({datos}) => {

  return (
    <div className='container listing'>
      <div className="columns is-multiline is-mobile">
        {datos.map((dato) => (
          <Card dato={dato} key={dato.nid} />
        ))

        }
      </div>
    </div>
  )
}

export default Listing