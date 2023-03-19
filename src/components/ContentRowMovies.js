import React from 'react';
import SmallCard from './SmallCard';
import {useState, useEffect} from 'react'; 

/*  Cada set de datos es un objeto literal */

function ContentRowMovies(){

    const [usuarios, setUsers] = useState([]);
  
    useEffect(() => {
      console.log("se monto el componente users");
      fetch("http://localhost:3001/api/usuarios")
      .then((response) => response.json())
        .then((data) => {
          setUsers(data.data);
        })
        .catch((error) => console.log(error));
    }, []);
    useEffect(() => {console.log("se actualizo el componente");
    }, [usuarios]);
  
    useEffect(() => {
      return () => console.log("se desmonto el componente");
    }, []);

    
    /* <!-- User quantity --> */

    let usersQuantity = {
        title:'User quantity' ,
        color:'warning',
        cuantity: usuarios.length,
        icon:'fa-user-check'
    }

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

    
    /* <!-- Products in DB --> */

    let moviesInDB = {
        title: 'Products in Data Base',
        color: 'primary', 
        cuantity: productos.length,
        icon: 'fa-clipboard-list'
    }


    const [categorias, setCategories] = useState([]);
  
    useEffect(() => {
      console.log("se monto el componente products");
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


    /* <!-- Total awards --> */

    let totalCategories = {
        title:' Total categories', 
        color:'success', 
        cuantity: categorias.length,
        icon:'fa-award'
    }

    let cartProps = [moviesInDB, totalCategories, usersQuantity];

    return (
    
        // {cartProps.usersQuantity.cuantity = usuarios.length}

        <div className="row">
            
            {cartProps.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowMovies;