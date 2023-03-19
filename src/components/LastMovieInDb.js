import React from 'react';
import imagenFondo from '../assets/images/users/juan_lechuga.jpg';
import {useState, useEffect} from 'react'; 



function LastMovieInDb(){
    
    const [usuarios, setUsers] = useState([]); 
    const [usuario, setUser] = useState([]);
    
    let lastUsers;

    useEffect(() => {
      console.log("se monto el componente users");
      fetch("http://localhost:3001/api/usuarios")
      .then((response) => response.json())
        .then((data) => {
          setUsers(data.data);
          setUser(data.data.pop());
          lastUsers = data.data.pop();
          console.log("Último Usuario --> " + lastUsers.id);
        })
        .catch((error) => console.log(error));
    }, []);

    useEffect(() => {console.log("se actualizo el componente");
    }, [usuarios]);
  
    useEffect(() => {
      return () => console.log("se desmonto el componente");
    }, []);

    

    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Last User in Data Base</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">

                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={imagenFondo} alt=" Star Wars - Mandalorian "/>
                    </div>

                    <p>Nombre: {usuario.nombre}</p>
                    <p>Apellido: {usuario.apellido}</p>
                    <p>email: {usuario.email}</p>

                    <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View user detail</a>
                </div>
            </div>
        </div>
    )
}

export default LastMovieInDb;
