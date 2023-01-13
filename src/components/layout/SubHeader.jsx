import React from 'react'
import styled from 'styled-components'
import { colors, FlexBox } from '../../styles'
import { Button, Icon, Select } from '../atoms'

const SubHeaderStyled = styled(FlexBox)`
  padding: 0.5rem 2rem;
  background-color: ${colors.tertiary};
`

function SubHeader({ ...props }) {
  const typeOptions = [
    { value: 'Piso', label: 'Piso' },
    { value: 'Chalet', label: 'Chalet' },
    { value: 'Garaje', label: 'Garaje' },
  ]
  const locationOptions = [
    { value: 'Mardrid', label: 'Mardrid' },
    { value: 'Barcelona', label: 'Barcelona' },
    { value: 'Zaragoza', label: 'Zaragoza' },
    { value: 'Valencia', label: 'Valencia' },
  ]
  return (
    <SubHeaderStyled {...props}>
      <form>
        <FlexBox direction="row" gap="0.5rem">
          <Select
            id="type"
            placeholder="Piso, chalet o garaje..."
            options={typeOptions}
          />
          <Select
            id="location"
            placeholder="Madrid, Barcelona, Zaragoza..."
            options={locationOptions}
          />
          <Button color2={colors.mainLight}>
            <Icon />
          </Button>
        </FlexBox>
      </form>
    </SubHeaderStyled>
  )
}

export default styled(SubHeader)``
