import styled from 'styled-components'
import { dimensions, FlexBox, misc } from '../../styles'

const Card = styled(FlexBox)`
  border: ${misc.border};
  border-radius: ${misc.borderRadius};
  height: ${dimensions.card.height};
  justify-content: space-between;
  box-shadow: ${misc.shadow};
`

export default Card
