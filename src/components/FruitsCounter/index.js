import './index.css'
import {Component} from 'react'

class FruitsCounter extends Component{
    state={mangoesCount:4,bananasCount:5}

    onClickMangoes = () => {
        this.setState(prevState =>({mangoesCount: prevState.mangoesCount+1}))
    }

    onClickBananas = () => {
        this.setState(prevState =>({bananasCount : prevState.bananasCount+1}))
    }

    render(){
        const {mangoesCount,bananasCount} = this.state

        return(
            <div className="app-container">
                <div className="fruits-counter">
                    <h1 className="count-text">Bob ate <span className="count">{mangoesCount}</span> mangoes <span className="count">{bananasCount}</span> bananas</h1>
                    <div className="counter-control-container">
                        <div className="counter-control">
                            <img src="https://assets.ccbp.in/frontend/react-js/mango-img.png" className="fruit-image" alt="mango"/>
                           <div className="buttons-container">
                            <button type="button" className="button" onClick={this.onClickMangoes}>Eat Mango</button>
                            </div> 
                        </div>
                        <div className="counter-control">
                            <img src="https://assets.ccbp.in/frontend/react-js/banana-img.png" className="fruit-image" alt="banana"/>
                            <div className="buttons-container">
                                <button className="button" type="button" onClick={this.onClickBananas}>Eat Banana</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }

}
export default FruitsCounter;