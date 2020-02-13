import React, { ReactNode } from 'react';
import { Flex } from '../atoms'


interface LayoutProps {
  children: ReactNode
}

const Layout = ({
  children
}: LayoutProps) => {
  return (
    <Flex flexDirection='column' width={['100%', '800px']} alignItems='center' mt={[0, 0, 12]} mx='auto'>
      {children}
    </Flex>
  )
}

export default Layout;