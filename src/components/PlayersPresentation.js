import React from 'react'

export default function PlayersPresentation({players}){
    console.log(players);
    return (
        <div className='container'>
        {players.map((player)=>(
            <div className='column'>
                <div className='card'>
                    <img alt='' src={player.img}/>
                    <div className='description'>
                        <h3>{player.name}</h3>
                        <p className='title'>{player.club}</p>
                    </div>
                    <p><button>Detail</button></p>
                    </div>
                </div>  
            ))}  
        </div>
    );
}