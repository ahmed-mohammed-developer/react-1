import logo from './logo.svg';
import './App.css';
import MyFirstComponent from './MyFirstComponent'
import Artical from './Artical'

function App() {
  const lists = [
    {id: 1, title: "as"},
    {id: 2, title: "aa"},
    {id: 3, title: "aaas"},
    {id: 4, title: "aads"},
    {id: 5, title: "ddd"},
     ];
  const myLists = lists.map((list) => {
    return <li key={list.id}>{list.title}</li>;
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          تعلم رياكت 
        </a>
        <ul>
          {myLists}
        </ul>
        {/*
        <MyFirstComponent />
        <Artical name="Mo"/>
        <Artical name="Serer" email="serre@gmail.com"/>
        <Artical name="qqq" email="aq@gmail.com" />
        <Artical name="ddd" email="sersdre@gmail.com" />
        <Artical name="vvv" email="dg@gmail.com" />
        <Artical name="aaa" email="yh@gmail.com" >
          <h1>Propes teset</h1>
        </Artical>
        */}
      </header>
    </div>
  );
}


export default App;
