// // import React from 'react'
// // import ChatLayout from './Layout/ChatLayout'
// // import { Route, Routes } from 'react-router-dom'
// // import Settings from './components/settings/Settings'

// // import UserRegister from './components/User/UserRegister'
// // import UserLogin from './components/User/UserLogin'
// // import Contact from './components/contacts/contact'
// // import Sidebar from './components/sidebar/Sidebar'
// // import Validater from './components/Validater'




// // const App = () => {
// //   return (
// //     <div>
     
// //       <Routes>
// //       <Route path="/signup" element={<UserRegister/>}/>
// //       <Route path="/login" element={<UserLogin/>}/>
// //       <Route path="/validator" element={user ? <Validater /> : <Navigate to="/login" />} />
      
// //       <Route path="/" element={<ChatLayout />} />
// //         <Route path="/settings" element={<Settings/>}/>
        
// //         <Route path="/contact" element={<Contact/>}/>
// //       </Routes>
  
// //     </div>
// //   )
// // }

// // export default App

// import React, { useState, useEffect } from 'react';
// import { Route, Routes, Navigate } from 'react-router-dom';
// import ChatLayout from './Layout/ChatLayout';
// import Settings from './components/settings/Settings';
// import UserRegister from './components/User/UserRegister';
// import UserLogin from './components/User/UserLogin';
// import Contact from './components/contacts/contact';
// import Validater from './components/Validater';
// import axios from 'axios';

// const App = () => {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const validateUser = async () => {
//       try {
//         const response = await axios.get('http://localhost:5000/api/v1/user/auth/validate', { withCredentials: true });
//         if (response.data.valid) {
//           setUser(response.data.user);
//         }
//       } catch (error) {
//         setUser(null);
//       }
//     };
//     validateUser();
//   }, []);

//   return (
//     <Routes>
//       <Route path="/signup" element={<UserRegister />} />
//       <Route path="/login" element={<UserLogin />} />
//       <Route path="/validator" element={user ? <Validater user={user} /> : <Navigate to="/login" />} />
//       <Route path="/" element={<ChatLayout />} />
//       <Route path="/settings" element={ <Settings /> } />
//       <Route path="/contact" element={user ? <Contact /> : <Navigate to="/login" />} />
//     </Routes>
//   );
// };

// export default App;
import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import axios from 'axios';

// Components
import ChatLayout from './Layout/ChatLayout';
import Settings from './components/settings/Settings';
import UserRegister from './components/User/UserRegister';
import UserLogin from './components/User/UserLogin';
import Contact from './components/contacts/contact';
import Validater from './components/Validater';

// Protected Route Component
const ProtectedRoute = ({ user, children }) => {
  return user ? children : <Navigate to="/login" />;
};

const App = () => {
  const [user, setUser] = useState(null);
 

  useEffect(() => {
    const validateUser = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/v1/user/auth/validate', {
          withCredentials: true,
        });
        if (response.status===200  && response.data.success) {
          
          console.log("hitted")
          setUser(response.data.user);
       
        }
      } catch (error) {
        console.error('User validation failed:', error.message);
        setUser(null);
      }
    };

    validateUser();
  }, []);

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/signup" element={<UserRegister />} />
      <Route path="/login" element={<UserLogin />} />
      <Route path="/" element={<ChatLayout />} />

      {/* Protected Routes */}
      {/* <Route
        path="/validator"
        element={
          <ProtectedRoute user={user}>
            <Validater user={user} />
          </ProtectedRoute>
        }
      /> */}
      <Route
        path="/settings"
        element={
          
            <Settings />
          
        }
      />
      <Route
        path="/contact"
        element={
          <ProtectedRoute user={user}>
            <Contact />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default App;
