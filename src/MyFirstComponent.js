export default function MyFirstComponent (){
    const x = "Ahmed ";
    const styleEle = {
        backgroundColor: "red"
    }
    return (
        <div>
            <h1 style={styleEle}>{x}Hello Word</h1>
            <h2>hi </h2>
            <button onClick={sayHello}>
                Click
            </button>
        </div>
      
    );
  }

  function sayHello (){
    alert("Ahmed")
  }