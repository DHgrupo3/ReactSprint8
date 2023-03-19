import React from 'react';
import {useState, useEffect} from 'react'; 

function ChartRow(props){

    const [productos, setProducts] = useState([]);
  
    useEffect(() => {
      console.log("se monto el componente products");
      fetch("http://localhost:3001/api/productos")
      .then((response) => response.json())
        .then((data) => {
            setProducts(data.data);
        })
        .catch((error) => console.log(error));
    }, []);

    useEffect(() => {console.log("se actualizo el componente");
    }, [productos]);
  
    useEffect(() => {
      return () => console.log("se desmonto el componente");
    }, []);

    return (        
        <div>    
            <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nombre</th>
                                <th>Descripción</th>
                                <th>Precio</th>
                                <th>Stock</th>
                            </tr>
                        </thead>
                {productos.map( (producto,i) =>
                <tr>
                    <td>{producto.id}</td>
                    <td>{producto.nombre}</td>
                    <td>{producto.descripcion}</td>
                    <td>{producto.precio}</td>
                    <td>{producto.stock}</td>
                </tr>

            )}    
            </div>
        )
    }

export default ChartRow;