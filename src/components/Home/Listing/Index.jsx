import React from 'react'
import Card from './ListItem/Card'

const Listing = ({datos}) => {
  // console.log(datos)
  return (
    <div className='container'>
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