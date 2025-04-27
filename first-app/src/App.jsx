import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/navbar'
import Card from './components/Card'


function App() {
  const [profile1, setprofile1] = useState({
    name: 'John Doe',
    url: './ava1.png',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, sunt'
  });
  const [profile2, setprofile2] = useState({
    name: 'John Doe',
    url: './ava2.png',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, sunt'
  });
  const [profile3, setprofile3] = useState({
    name: 'John Doe',
    url: './ava3.png',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, sunt'
  });
  const [profile4, setprofile4] = useState({
    name: 'John Doe',
    url: './ava4.png',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, sunt'
  });
  const [profile5, setprofile5] = useState({
    name: 'John Doe',
    url: './ava5.png',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi, sunt'
  });

  return (
    <>
      <div>
        <Navbar />
        <h1 className='title'>Select any Card</h1>
        <div className="cards-container">
          <Card profile={profile1}/>
          <Card profile={profile2}/>
          <Card profile={profile3}/>
          <Card profile={profile4}/>
        </div>
      </div>
    </>
  )
}

export default App
