import useInputStates from "../hooks/useInputStates";


const HookForm = () => {

    const [name, handleNameChange] = useInputStates('Rojoni'); 
    
    const handleSubmit = e =>{
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name} onClick={handleNameChange} type="text" name="name"/>
                <br />
                <input  type="email" name="email" id="" />
                <br />
                <input  type="password" name="password" id="" required/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;