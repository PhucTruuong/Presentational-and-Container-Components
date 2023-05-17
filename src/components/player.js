import React, {Component} from 'react'
export default class player extends Component{
    render(){
        return(
            <div className='container'>
                <div className='grid'>
                    <div className='column'>
                        <div className='card'>
                            <img alt='' src='assets/images/cr.jpg'/>
                            <div className="description">
                                <h3>Cristiano Rolnaldo</h3>
                                <p className='title'>Manchester United</p>
                            </div>
                            <p><button>Detail</button></p>
                        </div>
                    </div>

                    <div className='column'>
                        <div className='card'>
                            <img alt='' src='assets/images/kante.jpg'/>
                            <div className='description'>
                                <h3>Kante</h3>
                                <p className='title'>Chelsea</p>
                            </div>
                            <p><button>Detail</button></p>
                        </div>
                    </div>

                    <div className='column'>
                        <div className='card'>
                            <img alt='' src='assets/images/messi.jpg'/>
                            <div className='description'>
                                <h3>Messi</h3>
                                <p className='title'>PSG</p>
                            </div>
                            <p><button>Detail</button></p>
                        </div>
                    </div>
                </div>
                <div className='grid'>
                    <div className='column'>
                        <div className='card'>
                            <img alt='' src='assets/images/neymar.jpg'/>
                            <div className='description'>
                                <h3>Neymar</h3>
                                <p className='title'>PSG</p>
                            </div>
                            <p><button>Detail</button></p>
                        </div>
                    </div>

                    <div className='column'>
                        <div className='card'>
                            <img alt='' src='assets/images/kane.jpg'/>
                            <div className='description'>
                                <h3>Kane</h3>
                                <p className='title'>Tottenham</p>
                            </div>
                            <p><button>Detail</button></p>
                        </div>
                    </div>

                    <div className='column'>
                        <div className='card'>
                            <img alt='' src='assets/images/haaland.jpg'/>
                            <div className='description'>
                                <h3>Haaland</h3>
                                <p className='title'>Manchester City</p>
                            </div>
                            <p><button>Detail</button></p>
                        </div>
                    </div>
                </div>
                <div className='footer'>
                    <h3 className='copyright'>copyright @2022</h3>
                </div>
            </div>
        )
    }
}