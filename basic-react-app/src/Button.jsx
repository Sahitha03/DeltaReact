function doSomething(event)
{
    console.log("Hello!");
    console.log(event);
}



export default function Button()
{
    return(
       <div>
         <button onClick={doSomething}>Click me!</button>
       </div>
    );
}