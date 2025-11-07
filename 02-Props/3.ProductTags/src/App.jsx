import React from 'react'
import './App.css'
import Product from './component/Product'
import Keyboard from '../public/images/keyboard.jpg'
import Stand from '../public/images/stand.jpg'
import Tripod from '../public/images/tripod.jpg'
import Headphone from '../public/images/headphone.jpg'
import Lamp from '../public/images/lamp.jpg'
import Mouse from '../public/images/mouse.jpg'
import Smartwatch from '../public/images/smartwatch.jpg'
import Speaker from '../public/images/speaker.jpg'
import USB from '../public/images/usb.jpg'
import Charger from '../public/images/charger.jpg'

const App = () => {
  return (
    <div className='maincontainer'>
      <h1>Product List</h1>
      <div className="productlist">
        <Product name="Wireless Headphones" price={4500} discount={10} image={Headphone} />
        <Product name="Smart Watch" price={7200} discount={15} image={Smartwatch} />
        <Product name="Bluetooth Speaker" price={3200} image={Speaker} />
        <Product name="Gaming Mouse" price={1800} discount={5} image={Mouse} />
        <Product name="Mechanical Keyboard" price={5600} image={Keyboard} />
        <Product name="Laptop Stand" price={2500} discount={8} image={Stand} />
        <Product name="USB-C Hub" price={3900} image={USB} />
        <Product name="Smartphone Tripod" price={2200} discount={12} image={Tripod} />
        <Product name="Portable Charger" price={3100} image={Charger} />
        <Product name="LED Desk Lamp" price={2800} discount={7} image={Lamp} />
      </div>
    </div>
  )
}

export default App
