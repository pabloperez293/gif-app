// import React from 'react'
// desde la version 17 no hace falta que importemos react
import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpert = () => {

    // Esto se almacena y se inicializa en un arreglo 
    const [ categories, setCategories ] = useState([ " Spider-man" , "Venom" ]);

    // console.log(categories);

    const onAddCategory = ( NewCategory ) =>{

    // este if lo que realiza es que no se repita el mismo heroe con la mismas latras
        if( categories.includes(NewCategory) )return;

        setCategories( [ NewCategory, ...categories ])

        // categories.push(NewCategory);
        // console.log("marvel")
        // setCategories([...categories,"iron-man"]); para agregar elemnt a un array
        // setCategories(cat =>[ ...cat, "flamabebe"])

        // de las opciones que tenemos arriba se puede llamar de cualquier manera.

    }

  return (
    <>
        {/* titulo */}
        <h2>GifExpert</h2>

        {/* input */}
        <AddCategory 
        //setCategories={ setCategories }
        onNewCategory = { event => onAddCategory(event) }

        />

        {/* Listado de tarjetas */}

        {/* <button onClick={ onAddCategory }> Agregar </button> */}

        <ol>
            {/* con el arreglo de linea 8 , hace un conteo colocandolos en el html */}
            { categories.map( categories => { 
                return <li key={ categories }> { categories } </li>
                }) 
            }

        </ol>

            {/* Item tarjetas */}
    </>
  )
}
