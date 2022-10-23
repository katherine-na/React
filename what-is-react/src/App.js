import React from "react";
import Form from "./components/Form";
import UsersList from "./components/UserList";
import MoviesList from "./components/MovieList";

const App = () => {
    return ( 
        <>
        <Form/>
        <UsersList/>
        <MoviesList/>
        </>
     );
}
 
export default App;