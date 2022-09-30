import React, { Component } from "react";
import {styles} from './style'

class TipCalculator extends Component{
    constructor(){
        super()
        this.state = {
            amount:'',
            service:30,
            people:'',
            payment:''
        }
    }
    showTipAmount = ()=>{
        {
            if(this.state.amount > 0 && this.state.people > 0){
                let amount = this.state.amount
                let service = this.state.service
                let result = ((((Number(amount)*Number(service))/100)+Number(amount))/Number(this.state.people)).toFixed(1)
                console.log(result)
                this.setState({payment:result})

            }else{
                this.setState({payment: 'Please,enter the value!'})
            }
        }
        

    }
    render(){
        // console.log('changing') Triggering part of input 
        return(
            <React.Fragment>
                <div style = {styles.container}>
                    <h1>Tip Calculator</h1>
                    <h5>How much was your bill?</h5>
                    <input type='number' name="amount" onChange={(event)=>this.setState({amount:event.target.value})} value={this.state.amount} ></input>
                    <h5>How was your service?</h5>
                    <select name="service" value={this.state.service} onChange = {(event)=> this.setState({service:event.target.value})}>
                        <option value="30">30% - Outstanding</option>
                        <option value="20">20% - Good</option>
                        <option value= "15">15% - It was Ok!</option>
                        <option value="10">10% - Bad</option>
                        <option value="5">5% - Terrible</option>
                    </select>
                    <h5>How many people are sharing the bill?</h5>
                    <input type="number" value={this.state.people} name = 'people' onChange={ (event) => this.setState({people:event.target.value})}  />
                    <button onClick={this.showTipAmount}>Calculate</button>
                    <h5>Tip Amount for each person:</h5>
                    <h3>{this.state.payment}</h3>
                </div>
            </React.Fragment>
        )
    }
}

export default TipCalculator