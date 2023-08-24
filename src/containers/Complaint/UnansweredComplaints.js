import React,{ Component } from "react";
import classes from './AnsweredComplaints.css'
import axios from 'axios'

class UnansweredComplaints extends Component{
    state={
       complaints:[],
       answer:""

    }
           
    componentDidMount() {
        axios.get('http://localhost:8090/api/complaint/getAllUnaswered')
          .then(res => {
             const apps=res.data;
             this.setState({complaints:apps})  
             console.log(this.state)
  
          });
      } 

      handleChange=(event)=> {
        this.setState({answer: event.target.value});
      }
       
      handleSubmit=(event,id)=>{
        const obj={
            complaintId:id,
            answer:this.state.answer,
            adminEmail: localStorage.userId
        }
        axios.post()
      }


    render(){
        const {complaints}=this.state;
        return(

            <div className={classes.container}>
                {complaints.map(comp=>{
                   const {subject, text, id }=comp;
            return(
             <div className={classes.unscard}> 
             <div className={classes.header}> {subject}</div>
             <label className={classes.minilabel}> Complaint:</label> 
             <div className={classes.complaint}>
               <label className={classes.text}> {text}</label>
                </div>
             <label className={classes.minilabel}> Add answer:</label> 
             <textarea placeholder="Add answer..." className={classes.complaint} onChange={(event) => this.handleChange(event)} value={this.state.answer} ></textarea>
             <input value="Submit answer" type="button" disabled={this.state.answer===""} onClick={(event) => this.handleSubmit(event, id)}></input>
              </div>

            
                 );} )}
              </div>
        )

       
    }
}
export default (UnansweredComplaints)