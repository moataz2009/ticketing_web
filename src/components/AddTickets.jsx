import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SemanticDatepicker from 'react-semantic-ui-datepickers';
import 'react-semantic-ui-datepickers/dist/react-semantic-ui-datepickers.css';
import axios from 'axios';
import { Redirect } from 'react-router';

export class AddTickets extends Component {
    
    state = {
        type  : "",
        sub_type  : "",
        description  : "",
        gender : "",
        from_time : "",
        to_time : "",
        ticket_date : "",
        priority : "",
        created_at  : "",
        created_by  : "",
        attachment: "",
        extension: ""
    };

    
    

    createTicket = async (e) => {
        e.preventDefault();

        if(this.state.attachment != ''){
            const attachFileBas64 = await this.converToBase64(this.state.attachment)
            const spl = attachFileBas64.split(";base64,");
            this.state.attachment = spl[1]

            const extensionSpl = spl[0].split("/");
            this.state.extension = extensionSpl[1]
       
        }



        axios.post('/ticket', this.state).then(res => (

            <Redirect to="/" />


        )).catch(e => {
            console.log(e)
        }) 

        if(this.state.type !== "Official letters"){
            this.state.sub_type = ""
        }

        console.log(this.state);
    }

    
    converToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            console.log(file)

            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onload = () => {
                resolve(fileReader.result)
            };

            fileReader.reject = (err) => {
                reject(err);
            }

        })
    }

    render() {

        const handleDateChange = (event, data) => this.setState({ticket_date: data.value});

        return (
            <div className='container card p-3 mt-5'>
                <h2>Add new Ticket</h2>
                <form className='ui form' onSubmit={this.createTicket}>
                   
                    <div className="row">
                        <div className="col-md-6 float-left">
                            <div className="mb-3">
                                <label className="form-label">Type</label>
                                <select className="form-select" onChange={(e) => this.setState({type : e.target.value})}>
                                    <option value="">Select Type</option>
                                    <option value="Official letters">Official letters </option>
                                    <option value="Car Reservation">Car Reservation</option>
                                    <option value="Maintenance">Maintenance</option>
                                    <option value="Ad-Hoc Cubes">Ad-Hoc Cubes</option>
                                    <option value="Cleaning">Cleaning</option>
                                    <option value="Furniture">Furniture</option>
                                    <option value="Restaurants">Restaurants</option>
                                    <option value="Occasions">Occasions</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6 float-left">

                            <div className="mb-3">
                                <label className="form-label">Sub Type</label>
                                {
                                    this.state.type === "Official letters" ?
                                        <select className="form-select" onChange={(e) => this.setState({sub_type : e.target.value})}>
                                            <option value="">State</option>
                                            <option value="Arab Bank Letter - Female">Arab Bank Letter - Female</option>
                                            <option value="Arab Bank Letter - Male">Arab Bank Letter - Male</option>
                                            <option value="Arab Islamic Bank Letter - Female">Arab Islamic Bank Letter - Female</option>
                                            <option value="Arab Islamic Bank Letter - Male">Arab Islamic Bank Letter - Male</option>
                                            <option value="Cairo Amman Bank Letter - Female">Cairo Amman Bank Letter - Female</option>
                                            <option value="Cairo Amman Bank Letter - Male">Cairo Amman Bank Letter - Male</option>
                                            <option value="The National Bank Letter - Female">The National Bank Letter - Female</option>
                                            <option value="The National Bank Letter - Male">The National Bank Letter - Male</option>
                                            <option value="Embassy Letter - Female">Embassy Letter - Female</option>
                                            <option value="Embassy Letter - Male">Embassy Letter - Male</option>
                                            <option value="Experience letter - Arabic - Female">Experience letter - Arabic - Female</option>
                                            <option value="Experience letter - Arabic - Male">Experience letter - Arabic - Male</option>
                                            <option value="Experience letter - English - Female">Experience letter - English - Female</option>
                                            <option value="Experience letter - English - Male">Experience letter - English - Male</option>
                                            <option value="General Bank Letter - Female">General Bank Letter - Female</option>
                                            <option value="General Bank Letter - Male">General Bank Letter - Male</option>
                                            <option value="Proof of Employment Letter - Arabic - Female">Proof of Employment Letter - Arabic - Female</option>
                                            <option value="Proof of Employment Letter - Arabic - Male">Proof of Employment Letter - Arabic - Male</option>
                                            <option value="Proof of Employment Letter - English - Female">Proof of Employment Letter - English - Female</option>
                                            <option value="Proof of Employment Letter - English - Male">Proof of Employment Letter - English - Male</option>
                                            <option value="Traffic & Transportation Dep.Letter - Female">Traffic & Transportation Dep.Letter - Female</option>
                                            <option value="Traffic & Transportation Dep.Letter - Male">Traffic & Transportation Dep.Letter - Male</option>
            
                                        </select>
                                    : 
                                    <input className="form-control" disabled type="text"  />
                                    
                                }
                            </div>
                        </div>
                        <div className="ui">
                            <div className=''>
                                <div className="mb-3">
                                    <label className="form-label">Description</label>
                                    <textarea className="form-control" onChange={(e) => this.setState({description : e.target.value})} rows="2"></textarea>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 float-left">
                        <div className="mb-3">
                                <label className="form-label">Gender</label>
                                <select className="form-select" onChange={(e) => this.setState({gender : e.target.value})}>
                                    <option value="">Select </option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                        </div>
                        <div className="col-md-6 float-left">
                            <div className="mb-3">
                                <label className="form-label"> Priority </label>
                                <select className="form-select"  onChange={(e) => this.setState({priority : e.target.value})}>
                                <option value="">Select </option>

                                    <option value="High">High</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Low">Low</option>
                                </select>
                            </div>
                        </div>
                        
                        <div className="col-md-6 float-left">
                            <div className="mb-3">
                                <div className="equal width mb-3s">
                                    <div className="mb-3">
                                        <label className="form-label">From Time </label>
                                        <input className="form-control" type="text"  onChange={(e) => this.setState({from_time  : e.target.value})} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 float-left">
                            <div className="mb-3">
                                <div className="equal width mb-3s">
  
                                    <div className="mb-3">
                                        <label className="form-label">To Time</label>
                                        <input className="form-control" type="text"  onChange={(e) => this.setState({to_time  : e.target.value})}  />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 float-left">
                            <div className="mb-3">
                                <label className="form-label">Date </label>

                                <SemanticDatepicker className='ui container p-0' onChange={handleDateChange} />

                            </div>
                        </div>
                        
                        <div className="col-md-6 float-left">
                            <div className="mb-3">
                                <label className="form-label">Date </label>

                                <input className="form-control"  onChange={(e) => this.setState({attachment : e.target.files[0]})} type="file"  />

                            </div>
                        </div>

                    </div>
                    

                    <button className='mt-3 my-2 btn btn-primary'>Add Ticket</button>
                </form>
            </div>
        )
    }
}

export default AddTickets
