import React ,{useContext, useState} from "react";

const AppContext= React.createContext();

const AppProvider =({children})=>{

    const [isSidebarOpen,setIsSidebarOpen]=useState(false)
    const [isModalOpen,setIsModalOpen]=useState(false)

    const openSidebar=()=>{
        setIsSidebarOpen(true)
    }
    const closeSidebar=()=>{
        setIsSidebarOpen(false)
    }
    const openModal=()=>{
        setIsModalOpen(true)
    }
    const closeModal=()=>{
        setIsModalOpen(false)
    }

    return <AppContext.Provider value={{isSidebarOpen,isModalOpen,openModal,closeModal,openSidebar,closeSidebar}} >{children}</AppContext.Provider>
}
export const useGlobal = ()=>{
    return useContext(AppContext)
}
export {AppContext,AppProvider}

/*import React ,{useContext, useState} from "react";

const AppContext= React.createContext();

const AppProvider =({children})=>{
    const [isSidebarOpen,setIsSidebarOpen]=useState(false);
    const [isModalOpen,setIsModalOpen]=useState(false);
    const openSidebar = ()=>{
        setIsSidebarOpen(true)
    }
    const closeSidebar = ()=>{
        setIsSidebarOpen(false)
    }
    const openModal = ()=>{
        setIsModalOpen(true)
    }
    const closeModal = ()=>{
        setIsModalOpen(false)
    }
    return <AppContext.Provider value={{isModalOpen,isSidebarOpen,openModal,openSidebar,closeModal,closeSidebar}}>{children}</AppContext.Provider>

}

export const useGlobal = ()=>{
    return useContext(AppContext)
}

export {AppContext,AppProvider}
*/
