import PropTypes from 'prop-types'
import Header from './Header'
import SubHeader from './SubHeader'
import { FlexBox } from '../../styles'
import { Outlet } from 'react-router-dom'

function Body() {
  return (
    <FlexBox>
      <Header />
      <SubHeader />
      <Outlet />
    </FlexBox>
  )
}

export default Body
