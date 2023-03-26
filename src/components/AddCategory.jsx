import { useState } from "react"

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setinputValue] = useState("")

    const onInChange = ({ target }) =>{
        // console.log(event.target.value)
        setinputValue( target.value );

    }
    const onSubmit = ( event ) => {
        // Esto le manda la logica del prevent, desde el primer formulario
        event.preventDefault();
        // console.log( inputValue );

        if ( inputValue.trim().length <= 1 ) return;

        // para agregarlo sin el boton, colocamos esta props de setCategories en la linea 3
        // setCategories(categories => [ inputValue, ...categories ]);
        // colocamos para que se agregue el array acompañado con la info vieja nuestra

        onNewCategory( inputValue.trim() );
        setinputValue("");
        // cada vez que escribis , al finalizar el enter se elimina el comentario realizado
    }



  return (
    // tenemos el primer "argumento event" y se lo derivamos a la funcion onsubmit(event).
    <form onSubmit= { (event) => onSubmit(event) }>
        <input 
            type="text"
            placeholder="Buscar Heroe"
            value= { inputValue }
            onChange= { (event) => onInChange(event) }
        />
    </form>    
  )
}

