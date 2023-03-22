// import React from 'react'
// desde la version 17 no hace falta que importemos react
import { useState } from 'react';

export const GifExpert = () => {

    // Esto se almacena y se inicializa en un arreglo 
    const [ categories, setCategories ] = useState([ " Spider-man" , "Venom" ]);

    // console.log(categories);

    const onAddCategory = () =>{
        // console.log("marvel")
        // setCategories([...categories,"iron-man"]); para agregar elemnt a un array
        setCategories( cat => [ ...cat, "Cap"])
    }

  return (
    <>
    {/* titulo */}
    <h2>GifExpert</h2>

    {/* input */}

    {/* Listado de tarjetas */}
    <button onClick={ onAddCategory }> Agregar </button>

    <ol>
    {/* con el arreglo de linea 8 , hace un conteo colocandolos en el html */}
        { categories.map( categories => { 
            return <li key={ categories }> { categories } </li>
        }) }

    </ol>

        {/* Item tarjetas */}
    </>
  )
}
