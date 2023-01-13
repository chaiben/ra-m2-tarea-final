import styled from 'styled-components'
import PropTypes from 'prop-types'
import { misc } from '../../styles'

const SelectStyled = styled.select`
  padding: ${misc.gap};
  border: ${misc.border};
  border-radius: ${misc.borderRadius};
  box-shadow: ${misc.shadow};
  appearance: none; /* Oculta la flecha para abrir el menú de opciones */
  width: ${(props) => props.width};
`

function Select({
  id,
  options,
  placeholder,
  value = '',
  onChange = () => {},
  width = '300px',
}) {
  return (
    <SelectStyled
      id={id}
      placeholder={placeholder}
      defaultValue={value}
      width={width}
    >
      <option value="" disabled hidden>
        {placeholder}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </SelectStyled>
  )
}

export default Select

Select.propTypes = {
  id: PropTypes.string.isRequired,
  options: PropTypes.array,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  width: PropTypes.string,
}
