import React, { Component } from "react";
import axios from 'axios'
import classes from './qr.css'

import QRCode from "react-qr-code";
class QRCodeList extends Component{

    state={
        appointments:[]
    }
    componentDidMount() {
        axios.get('http://localhost:8090/api/korisnik/getAllDonorAppointments',{
          params:{
           "email": localStorage.userId}})
          .then(res => {
             const apps=res.data;
             this.setState({appointments:apps})  
             console.log(this.state)
  
          });
      } 
  render(){
    const {appointments}=this.state;

     return(

        <div>
            <select>
                <option>sort by date first new</option>
                <option>sort by date first old</option>
                <option>sort by status New/Finished/Declined</option>
                <option>sort by status Declined/Finished/New</option>
            </select>
             {appointments.map(app=>{
                      const {QRCode} =app;
                      return(
                        <div>
                            <img src={`data:image/jpeg;base64,${QRCode}`} />
                      </div>
             )})}
            
                   
            </div>
        
     )

  }

}
export default(QRCodeList)