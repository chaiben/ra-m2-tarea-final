import PropTypes from 'prop-types'
import styled from 'styled-components'

const FormatedIcon = styled.span`
  display: flex;
  align-self: center;
  color: white;
  .material-symbols-outlined {
    font-variantion-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48;
  }
`

export default function Icon({ type = 'search' }) {
  return (
    <FormatedIcon className="material-symbols-outlined">{type}</FormatedIcon>
  )
}

Icon.propTypes = {
  type: PropTypes.node,
}
