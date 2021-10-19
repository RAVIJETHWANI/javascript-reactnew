import React, { useContext } from 'react';
import { FaBars } from 'react-icons/fa';

import {useGlobal} from "./SidebarContextprtc"
function Home() {
    const {openSidebar,openModal}= useGlobal()
    
  return (
      <main>
          <button className="sidebar-toggle" onClick={openSidebar}>
              <FaBars />
          </button>
          <button className="btn" onClick={openModal}>
              show modal
          </button>
      </main>
  )
}

export default Home;