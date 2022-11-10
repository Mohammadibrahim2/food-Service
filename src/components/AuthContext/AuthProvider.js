// import React, { createContext, useEffect, useState } from "react";
// import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged,signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
// import app from "../../firebase/firebase.config";



// const auth = getAuth(app)
// export const AuthContext=createContext()

// const AuthProvider=({children})=>{

//     const [user,setUser]=useState(null)
//     const [loading,setLoading]=useState(true)

   
//  const signup=(email,password)=>{
//     return createUserWithEmailAndPassword(auth,email,password)
//  }

// const login=(email,password)=>{
//     setLoading(true)

//     return signInWithEmailAndPassword(auth, email, password)
// }
// const Googleproviderlogin=(provider)=>{
//     setLoading(true)
//     return signInWithPopup(auth, provider)

// }
// const logout=()=>{
//     return  signOut(auth)
// }
// useEffect(()=>{
//     const unSubscribe=onAuthStateChanged(auth,(currentuser)=>{
//         setUser(currentuser)
//         setLoading(false)
    

//     })
//     return()=>{
//         unSubscribe()
//     }




// },[])

// const authinfo={
//     user,
//     loading,
//     login,
//     logout,
//     signup,
// Googleproviderlogin

// }
//     return(
        
//     <div>
//         <AuthContext.Provider value={authinfo}>
//             {children}
//         </AuthContext.Provider>
        
//     </div>
//      )

// }
// export default AuthProvider






import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";




export const AuthContext=createContext()



const auth = getAuth(app);

const AuthProvider=({children})=>{
    

    const[user,setuser]=useState(null)
    const [loading,setLoading]=useState(true)

    
// google log in provider...
const Providerlogin=(provider)=>{
    setLoading(true)
    return signInWithPopup(auth,provider)

};
const createUser=(email,password)=>{
    setLoading(true)
    return createUserWithEmailAndPassword(auth,email,password)
};
const signIn=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
};


const logOut=()=>{
    setLoading(true)
    return signOut(auth)
};

useEffect(()=>{
const unsubscribe=onAuthStateChanged(auth,(currentuser)=>{
    setuser(currentuser)
    setLoading(false)
})
return()=>{
    unsubscribe()
}
},[]);



const authInfo={user,Providerlogin,logOut,createUser,signIn,loading}


return(

    <AuthContext.Provider value={authInfo}>

        {children}


    </AuthContext.Provider>
)



}
export default AuthProvider;
