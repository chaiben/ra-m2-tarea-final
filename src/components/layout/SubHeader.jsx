import React from 'react'
import styled from 'styled-components'
import { colors, FlexBox } from '../../styles'

const SubHeaderStyled = styled(FlexBox)`
  padding: 0.5rem 2rem;
  background-color: ${colors.tertiary};
`

function SubHeader({ ...props }) {
  return (
    <SubHeaderStyled {...props}>
      <form>
        <input
          id="type"
          name="type"
          type="text"
          placeholder="Piso, chalet o garaje..."
        />
        <input
          id="location"
          name="location"
          type="text"
          placeholder="Madrid, Barcelona, Zaragoza..."
        />
      </form>
    </SubHeaderStyled>
  )
}

export default styled(SubHeader)``
