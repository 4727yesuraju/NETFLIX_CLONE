import axios from 'axios';
import toast from 'react-hot-toast';
import {create} from 'zustand';

export const useAuthStore = create((set)=>({
    user : null,
    isSigningUp : false,
    isLoggingOut : false,
    isCheckingAuth : true,
    
    signup : async (creadentials)=>{
        set({isSigningUp : true});
        try {
            const response = await axios.post("/api/v1/auth/signup",creadentials);
            set({user : response?.data?.user,isSigningUp:false});
            toast.success("Account created successfully.")
        } catch (error) {
            toast.error(error.response.data.message || "Signup fails");
            set({isSigningUp:false,user : null});
        }
    },

    login : async (Credential)=>{
        set({isLoggingIn : true});
        try {
            const response = await axios.post('/api/v1/auth/login',Credential);
            set({user : response.data.user, isLoggingIn : false});
        } catch (error) {
            set({isLoggingIn : false, user : null});
            toast.error(error.message.data.message || "Login failed")
        }
    },

    logout  : async ()=>{
        set({isLoggingOut : true});
        try {
            await axios.post("/api/v1/auth/logout");
            set({user : null, isLoggingOut : false});
        } catch (error) {
            set({isLoggingOut : false});
            toast.error(error.response.data.message || "Logout failed")
        }
    },

    authCheck : async ()=>{
        set({isCheckingAuth :true});
        try {
            const response = await axios.get('/api/v1/auth/authCheck');
            set({user : response.data.user, isCheckingAuth : false});
        } catch (error) {
            set({user : null,isCheckingAuth : false});
        }
    }
}))