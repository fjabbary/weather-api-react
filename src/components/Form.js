import React, { Component } from 'react';
import './style/Form.css'

class Form extends Component {
    render() {
        return (
            <div>

                <form className="bg-light">
                    <h3 className="text-danger">Weahter API</h3>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input type="text" className="form-control" id="city" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="postal">Postal/Zip code</label>
                        <input type="text" className="form-control" id="postal" />
                    </div>

                    <button className="btn btn-warning mr-5">Show hourly weather</button>
                    <button className="btn btn-success">Show weather now</button>
                </form>
            </div>
        );
    }
}

export default Form;
