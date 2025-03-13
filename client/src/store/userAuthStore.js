import axios from "axios";
import { create } from "zustand";
import config from "../config";
const useAuthStore = create((set) => ({
  user: null,
  token: null,
  
  login: (userdata, token) => set({ user: userdata, token }),
  
  logout: () => set({ user: null, token: null }) ,
  signout:async (id)=>{
   try {
    const response=await axios.post(`${config.backend_URL}/api/auth/deleteaccount`,{userId:id})
    set({ user: null, token: null })
   } catch (error) {
    
   }
  },
  update:async(updateuserdata)=>{
    try {
      const response=await axios.put(`${config.backend_URL}/api/auth/updateuser`,{userId:updateuserdata.id,...updateuserdata})
      if (response.data.success) {  
        set({ user: response.data.user });
      }
    } catch (error) {
      console.log("Some error occured while updating user data");
    }
  }
}));

export default useAuthStore;
