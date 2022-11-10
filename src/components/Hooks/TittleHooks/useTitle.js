import React, { useEffect } from "react";


const useTitle=title=>{


    useEffect(()=>{
        document.title=`${title}-Protpolio`
    
    
    },
    [title])
}
export default useTitle
