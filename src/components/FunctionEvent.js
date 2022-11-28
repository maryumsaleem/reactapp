function FunctionEvent(){
    function handleClick(){
        console.log('Button clicked');
    }
    return (
        <div>
            Functional Component
            <button onClick={handleClick}>Click here</button>
        </div>
       
    );
}
export default FunctionEvent; 