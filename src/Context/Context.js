import { createContext } from "react";

const GlobalContext = createContext({
   headerHeight : 0,
   setHeaderHeight : ()=> {},
   footerHeight: 0,
    setFooterHeight: () => { },
    isModalOpen: false,
    setIsModalOpen: () => { },
    customModal: {
        el: null,
        isOpen: false
    },
    setCustomModal: () => { }
})

export default GlobalContext;