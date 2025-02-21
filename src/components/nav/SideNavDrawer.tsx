import React from "react"
import SideNav from './SideNav'
import { Drawer } from '@mantine/core'

interface Props {
  opened: boolean,
  close: () => void
}

export function SideNavDrawer({ opened, close }: Props) {
  return (
    <Drawer
      padding={0}
      size='14rem'
      opened={opened}
      onClose={close}
      position="left"
      withCloseButton={false}
    >
      <SideNav />
    </Drawer>
  )
}