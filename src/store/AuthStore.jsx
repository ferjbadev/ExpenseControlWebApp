import { create } from "zustand";
import { supabase } from "../supabase/supabase.config";

export const useAuthStore = create((set) => ({
    isAuth: false,
    singInWithGoogle: async () => {
        try {
            const { data, error } = await supabase.auth.signInWithOAuth({
                provider: "google",
            });
            if (error) {
                throw new Error("Failed to sign in with Google. Please try again.");
               
            }
            set({ isAuth: true });
            return data;
        } catch (error) {
            console.log(error);
        }
    },

    signOut: async () => {
        try {
            const { error } = await supabase.auth.signOut();
            set({ isAuth: false });
            if (error) {
                throw new Error("Failed to sign out. Please try again.");
            }
        } catch (error) {
            console.log(error);
        }
    },
    
}))


