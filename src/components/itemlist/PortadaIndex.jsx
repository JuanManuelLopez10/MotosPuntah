import React from 'react'
import { useContext } from 'react';
import { CartContext } from '../CartContext';
import ImagenPortada from './ImagenPortada';
import TextoPortada from './TextoPortada';


const PortIndex = (props) => {
  const usarcont = useContext(CartContext)
  if(usarcont.scrorientation==='portrait'){
    return (
      <div className='d-flex portada flex-nowrap justify-content-center align-items-end portadaitemlist'>
          <ImagenPortada wallpapervertical={props.producto.wallpapervertical}/>
          <TextoPortada idCat={props.idCat}/>
      </div>
    )
  }else{
    return (
      <div className='d-flex portada flex-nowrap'>
          <ImagenPortada wallpaperhorizontal={props.producto.wallpaperhorizontal}/>
          <TextoPortada idCat={props.idCat}/>
      </div>
    )
  }
}

export default PortIndex