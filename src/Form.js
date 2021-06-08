console.log('Example to prevent default JS behavior');
// In react, we cannot return false to prevent a default behaviour
function Form(){
    // e is an synthetic event - a cross-browser wrapper around browser`s native event
    // so we do not have to care about cross - browser compatibility
    function handleSubmit(e){ 
        e.preventDefault();
        console.log('You clicked submit.');
    }

    return(
        <form onSubmit={handleSubmit}>
            <button type="submit">Submit</button>
        </form>
    );
}

export default Form;