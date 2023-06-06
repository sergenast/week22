import React from 'react'

class Hero extends React.Component {
  render(){

    const {name, universe, alterego, occupation, friends, superpowers, url, info, alt} = this.props
  return (
    <div className="hero-card">
        <h1 className="hero-name">{name}</h1>
          <div className='hero-info'>
            <div>Вселенная: {universe}</div>
          <div>Альтерэго: {alterego}</div>
          <div>Род деятельности: {occupation}</div>
          <div>Друзья: {friends}</div>
          <div>Супер силы: {superpowers}</div>
          </div>
        <img src={url} alt={alt}></img>
        <div>{info}</div>
    </div>
  );
  }
}

// function Hero(props){
//   return(
//         <div className="hero-card">
//         <h1 className="hero-name">{props.name}</h1>
//           <div className='hero-universe'>{props.universe}</div>
//           <div>{props.alterego}</div>
//           <div>{props.occupation}</div>
//           <div>{props.friends}</div>
//           <div>{props.superpowers}</div>
//         <img src={props.url} alt={props.alt}></img>
//         <div>{props.info}</div>
//     </div>
//   )
// }

export default Hero;