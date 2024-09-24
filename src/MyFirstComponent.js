import  './MyFirstComponent.css'
export default function MyFirstComponent (){
    const x = "Ahmed ";
    const styleEle = {
        backgroundColor: "red"
    }
    return (
        <div>
            <h1 style={styleEle}>{x}Hello Word</h1>
            <h2 className={"Ahmed"}>hi </h2>
            <button onClick={sayHello}>
                Click
            </button>
            <h2 className={x === "Ahmed" ? 'home' : "greenbg"}>Home</h2>
        </div>
      
    );
  }

  function sayHello (){
    alert("Ahmed")
  }