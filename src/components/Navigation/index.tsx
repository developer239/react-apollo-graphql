import React from 'react'
import { Layout, Menu } from 'antd'
import { Link, withRouter } from 'react-router-dom'
import { useQuery } from '@apollo/react-hooks'
import { StyledMenu } from './styled'
import { Me } from 'modules/auth/gql/__generated__/Me'
import { ME_QUERY } from 'modules/auth/gql'
import { ROUTE_PATHS } from 'routes'

const { Header } = Layout

export const Navigation = withRouter(props => {
  const { data } = useQuery<Me>(ME_QUERY)

  const menuItems = [
    { id: '1', to: ROUTE_PATHS.home, label: 'Home' },
    ...(data?.me
      ? [
          { id: '2', to: ROUTE_PATHS.blog.create, label: 'Create' },
          { id: '3', to: ROUTE_PATHS.auth.me, label: 'Me' },
          { id: '4', to: ROUTE_PATHS.auth.logout, label: 'Log Out' },
        ]
      : [
          { id: '5', to: ROUTE_PATHS.auth.register, label: 'Register' },
          { id: '6', to: ROUTE_PATHS.auth.login, label: 'Login' },
        ]),
  ]

  const selectedItem = menuItems.find(
    menuItem => menuItem.to === props.location.pathname
  )
  const selectedIndex = selectedItem ? selectedItem.id : '0'

  return (
    <Header>
      <StyledMenu mode="horizontal" selectedKeys={[selectedIndex]} theme="dark">
        {menuItems.map(menuItem => (
          <Menu.Item key={menuItem.id}>
            <Link to={menuItem.to}>{menuItem.label}</Link>
          </Menu.Item>
        ))}
      </StyledMenu>
    </Header>
  )
})
