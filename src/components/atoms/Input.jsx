import React from 'react'
import PropTypes from 'prop-types'
import { colors } from '../../styles'

export default function Input({
  id,
  name,
  type = 'text',
  placeholder = '',
  value = '',
  onChange = () => {},
}) {
  return (
    <input
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  )
}

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
}
