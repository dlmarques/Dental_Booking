import React, { useContext } from 'react'
import "./Inbox.scss"

import { ThemeContext } from '../App'
import SideBox from './SideBox'
import Box from './Box'


const Inbox = () => {
  const theme = useContext(ThemeContext)
  return (
    <div
    className={theme.dark ? 'inbox-container dark' : 'inbox-container' }
    >
      <SideBox/>
      <Box/>
    </div>
  )
}

export default Inbox