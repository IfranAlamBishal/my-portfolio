import { createContext, useEffect, useRef, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "../Firebase/firebase.config";

export const SharedContext = createContext(null);
const auth = getAuth(app);

const SharedProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const contacts = useRef(null);

    const scrollToContact = () => {
        contacts.current.scrollIntoView({ behavior: 'smooth' });
    }

    useEffect(() => {
        const unSUbscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSUbscribe();
        }
    }, []);

    const contextItems = {
        user,
        loading,
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