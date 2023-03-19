import React from "react";
import {useState, useEffect} from 'react'; 

function GenresInDb() {

  const [categorias, setCategories] = useState([]);
  
    useEffect(() => {
      console.log("se monto el componente categories");
      fetch("http://localhost:3001/api/categorias")
      .then((response) => response.json())
        .then((data) => {
          setCategories(data.data);
        })
        .catch((error) => console.log(error));
    }, []);

    useEffect(() => {console.log("se actualizo el componente");
    }, [categorias]);
  
    useEffect(() => {
      return () => console.log("se desmonto el componente");
    }, []);

    
  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            Categories in Data Base
          </h5>
        </div>
        <div className="card-body">
          <div className="row">
            {/* --- */}

              {categorias.map( (categoria,i) =>
                  <div className="col-lg-6 mb-4">
                    <div className="card bg-dark text-white shadow">
                      <div className="card-body">{categoria.nombre}</div>
                    </div>
                  </div>
              )}   

            {/* --- */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default GenresInDb;
