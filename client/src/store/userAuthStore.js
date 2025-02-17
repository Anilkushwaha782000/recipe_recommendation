import axios from "axios";
import { create } from "zustand";

const useAuthStore = create((set) => ({
  user: null,
  token: null,
  
  login: (userdata, token) => set({ user: userdata, token }),
  
  logout: () => set({ user: null, token: null }) ,
  signout:async (id)=>{
   try {
    const response=await axios.post('http://localhost:5000/api/auth/deleteaccount',{userId:id})
    set({ user: null, token: null })
   } catch (error) {
    
   }
  },
  update:async(updateuserdata)=>{
    try {
      const response=await axios.put('http://localhost:5000/api/auth/updateuser',{userId:updateuserdata.id,...updateuserdata})
      if (response.data.success) {  
        set({ user: response.data.user });
      }
    } catch (error) {
      console.log("Some error occured while updating user data");
    }
  }
}));

export default useAuthStore;
