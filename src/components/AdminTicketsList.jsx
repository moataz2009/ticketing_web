import axios from 'axios';
import React, { useEffect, useState } from 'react'

const AdminTicketsList = () => {
    const [tickets, setTickets] = useState([]);
    const [loadin, setLoading] = useState(true);
    useEffect(() => {
        axios.get('/ticket').then(res => {

            setTickets(res.data);
            console.log(res);
            setLoading(false);
        }).catch(e => {
            console.log(e)
        }) 
    }, [])


    if(loadin == true){
        return(
            <div className='text-center mt-5'><h1>Loading</h1></div>
        )
    }
    

    return (
        <div className='container mt-5'>
            <h1>My Tickets</h1>

            {/* <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-outline-primary">Left</button>
                <button type="button" className="btn btn-outline-primary">Middle</button>
                <button type="button" className="btn btn-outline-primary">Right</button>
            </div>
             */}
            
            <div className="row">
            {
                tickets.map((item, index) => (
                    <div className="col-md-12">
                        <div className="card  mt-3" key={index}>
                            <div className="card-body">
                                <h5 className="card-title float-start">{item.type}  </h5>
                                <p className='float-end'>priority : {item.priority}</p>

                                <div className="clearfix"></div>
                                <p >{item.sub_type}</p>
                                <p className="card-text"><b>Description : </b>{item.description}</p>

                                {/* time     */}
                                <div className="row">
                                    <div className="col-sm-12">
                                        <p><b>Date : </b> {item.ticket_date}</p>
                                    </div>
                                    <div className="col-sm-6 text-start">
                                        <p><b>From Time : </b> {item.from_time}</p>
                                    </div>
                                    <div className="col-sm-6 text-end">
                                        <p><b>To Time : </b> {item.to_time}</p>
                                    </div>
                                    
                                    <div className="col-sm-6 text-start">
                                        <p><b>gender : </b> {item.gender}</p>
                                    </div>

                                    
                                    <div className="col-sm-6 text-end">
                                        <p><b>Status : </b> {item.status}</p>
                                    </div>
                                </div>

                                <a href="#" className="btn btn-success ">Go somewhere</a>
                                <a href="#" className="btn btn-outline-danger ms-2">Canceld</a>

                            </div>
                        </div>
                    </div>
                ))
            }
            </div>
            
           <br />
           <br />
           <br />
        </div>
    )
}

export default AdminTicketsList
