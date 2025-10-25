import {createContext, useState, useEffect, useContext} from "react";
import { supabase } from "../supabase/supabase.config";
import Loading from "../components/atomos/Loading";

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
            if (session === null){
                setUser(null);
            } else {
                setUser(session);
                console.log("event", event);
                console.log("session", session?.user);
            }
            setLoading(false);
        }
    );

    return () => {
        authListener?.subscription?.unsubscribe();
    };
 }, []);

 const logout = async () => {
    try {
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
        setUser(null);
    } catch (error) {
        console.error("Error logging out:", error);
    }
 };

 if (loading) {
    return <Loading />;
 }

 return (
    <AuthContext.Provider value={{user, logout}}>
        {children}
    </AuthContext.Provider>
 );
}

export const UserAuth = () => {
    return useContext(AuthContext);
}
