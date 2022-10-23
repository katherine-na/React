import React from "react";
import Form from "./components/Form";
import UsersList from "./components/UserList";
import MoviesList from "./components/MovieList";
import Navbar from "./components/Navbar";

const App = () => {
    return ( 
        <>
        <Navbar/>
        <MoviesList/>
        <UsersList/>
        <Form/>
        </>
     );
}
 
export default App;