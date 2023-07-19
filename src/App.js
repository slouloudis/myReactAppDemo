import './App.css';
import Test from './components/Test'
import data from './data.json'
import { useState } from 'react';
import Test2 from './components/Test2';


function App() {  
  return (
    <div>
      <Test2/>
      <div className="App">
        {/* <Test title='this is a cool dragon' imgUrl='google.com' para='wow!!'/> */}
      {
      data.map(function (arrayElement) {
        return (
        <Test title={arrayElement.title} imgUrl={arrayElement.image_url} para={arrayElement.description} key={arrayElement._id}></Test>)
      })}
    </div>
    </div>

)}

export default App;
