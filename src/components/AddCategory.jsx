import { useState } from "react"

export const AddCategory = () => {

    const [inputValue, setinputValue] = useState("Spider")

    const onInChange = () =>{
        // console.log(event.target.value)
        setinputValue(event.target.value);

    }
    const onSubmit = ( event ) => {
        // Esto le manda la logica del prevent, desde el primer formulario
        event.preventDefault();
        console.log( inputValue );
    }

  return (
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

