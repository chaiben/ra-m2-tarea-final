import React from 'react'
import PropTypes from 'prop-types'
import { CardHouse, CardHouseSelected } from './'

export default function Houses({ list, selected = '' }) {
  return (
    <>
      {list.map((element, index) =>
        selected === index.toString() ? (
          <CardHouseSelected key={`house_${index}`} {...element} />
        ) : (
          <CardHouse key={`house_${index}`} {...element} />
        ),
      )}
    </>
  )
}

Houses.propTypes = {
  list: PropTypes.array.isRequired,
  selected: PropTypes.number,
}
