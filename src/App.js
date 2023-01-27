
import React from 'react';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import { routes } from './components/Routes/Routes';


function App() {
  return (
    <div >

      
     <RouterProvider router={routes}>

     </RouterProvider>
     <Toaster/>
      
    </div>
  );
}

export default App;
