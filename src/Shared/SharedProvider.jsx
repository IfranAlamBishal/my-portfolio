import { createContext, useRef } from "react";

export const SharedContext = createContext(null)

const SharedProvider = ({ children }) => {


    const contacts = useRef(null);

    const scrollToContact = () => {
        contacts.current.scrollIntoView({ behavior: 'smooth' });
    }

    const contextItems = {
        contacts,
        scrollToContact,
    }

    return (
        <SharedContext.Provider value={contextItems}>
            {children}
        </SharedContext.Provider>
    );
};

export default SharedProvider;