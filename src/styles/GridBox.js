import styled from 'styled-components'
import PropTypes from 'prop-types'
import misc from './misc'

const GridBox = styled.div`
  display: grid;
  padding: ${({ padding }) => padding || '0'};
  grid-template-columns: ${({ gridTemplateColumns }) => gridTemplateColumns || 'auto'};
  grid-template-rows: ${({ gridTemplateRows }) => gridTemplateRows || 'auto'};
  gap: ${({ gap }) => gap || misc.gap};
`

export default GridBox

GridBox.propTypes = {
  padding: PropTypes.string,
  gridTemplateColumns: PropTypes.string,
  gridTemplateRows: PropTypes.string,
  gap: PropTypes.string,
}