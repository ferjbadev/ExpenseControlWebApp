import { create } from "zustand";
import { supabase } from "../supabase/supabase.config";

export const useAuthStore = create((set) => ({
    isAuth: false,
    singInWithGoogle: async () => {
        try {
            const { data, error } = await supabase.auth.signInWithOAuth({
                provider: "google",
            });
        } catch (error) {
            console.log(error);
        }
    },
    user: null,
    setUser: (user) => set({ user }),
}))


