
import { Navigate, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import AuthPage from "./pages/AuthPage/AuthPage";
import PageLayout from "./Layouts/PageLayout/PageLayout";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import { Button } from '@chakra-ui/button'
import { Container } from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/firebase";
import UserPage from "./pages/UserPage";
import PostPage from "./pages/PostPage";
import Header from "./components/Header";


function App() {
  const [authUser] = useAuthState(auth);

   
  return (
       <PageLayout>
        <Container maxW="620px">

           <Routes>
              <Route path="/:username" element={<UserPage />}  />
           </Routes>
        </Container>
         <Header/> 
         
      <Routes>
         <Route path="/" element={authUser ? <HomePage /> : <Navigate to="/auth" />} />
         <Route path='/auth' element={!authUser ? <AuthPage /> : <Navigate to='/' />} />
         <Route path='/:username' element={<ProfilePage />} />
         <Route path=":username/post/:pid" element={<PostPage />} />
         
         
       
      </Routes>
     
    </PageLayout>
    
 
  );
}

export default App;