import {createContext, useState, useEffect, useContext} from "react";
import { supabase } from "../supabase/supabase.config";

const AuthContext = createContext();

export const AuthContextProvider = ({children}) => {
 const [user, setUser] = useState(null);
 const [loading, setLoading] = useState(true);

 useEffect(() => {
    // Check current session
    supabase.auth.getSession().then(({ data: { session } }) => {
        setUser(session);
        setLoading(false);
    });

    // Listen for auth changes
    const {data: authListener} = supabase.auth.onAuthStateChange(
        async (event, session) => {
            setUser(session);
            setLoading(false);
            console.log("Auth event:", event, "Session:", session);
        }
    );

    return () => {
        authListener?.subscription?.unsubscribe();
    };
 }, []);

 if (loading) {
    return <div>Loading...</div>;
 }

return (
    <AuthContext.Provider value={{user}}>
        {children}
    </AuthContext.Provider>
 );
}

export const UserAuth = () => {
    return useContext(AuthContext);
}
