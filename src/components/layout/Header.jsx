import React from 'react'
import styled from 'styled-components'
import { FlexBox } from '../../styles'
import { Text } from '../atoms'

const HeaderStyled = styled(FlexBox)`
  padding-left: 2rem;
  padding-right: 2rem;
`

function Header() {
  return (
    <HeaderStyled direction="row" justify="space-between">
      <Text>MIPISO.com</Text>
      <FlexBox direction="row" gap="1rem">
        <Text>Buscador</Text>
        <Text>Datos</Text>
        <Text>Mi Perfil</Text>
      </FlexBox>
    </HeaderStyled>
  )
}

export default Header
