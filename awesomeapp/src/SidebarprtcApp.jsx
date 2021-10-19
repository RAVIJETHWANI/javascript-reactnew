import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import links from './SidebarData';
import Home from "./SidebarHomeprtc"
import Modal from "./SidebarModalprtc"
import Sidebarprtc from './Sidebarprtc';
function App() {
  return (
      <>
      <Home />
      <Modal />
      <Sidebarprtc />
      </>
  )
}

export default App;