import React, { Component } from 'react';
import './style/Form.css'
import axios from 'axios'

class Form extends Component {

    state = {
        city: '',
        error: ''
    }

    getTodayDate() {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = yyyy + '-' + mm + '-' + dd;

        return today
    }

    getYesterdayDate() {
        var yesterday = new Date(Date.now() - 86400000);
        var dd = String(yesterday.getDate()).padStart(2, '0');
        var mm = String(yesterday.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = yesterday.getFullYear();

        yesterday = yyyy + '-' + mm + '-' + dd;
        return yesterday
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    // handleHourly = (e) => {
    //     e.preventDefault();
    //     const api_key = 'a3800d82739d466790523f48e15c3fc0'

    //     const url = `https://api.weatherbit.io/v2.0/history/hourly?postal_code=${this.state.postal}&city=${this.state.city}&start_date=${this.getYesterdayDate()}&end_date=${this.getTodayDate()}&key=${api_key}`

    //     axios.get(url)
    //         .then(response => {
    //             console.log(response.data)
    //         })
    // }

    handleNow = (e) => {
        e.preventDefault();
        const api_key = '4128bbae61aa3ae31a5847c30182bdf1';

        const url = `http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${api_key}`

        axios.get(url)
            .then(response => {
                this.props.currentWeather(response.data)

                this.setState(({ error: '' }))
            })
            .catch(error => {
                this.props.currentWeather('')

                this.setState({
                    error: 'Location was not found.'
                })
            })
    }

    render() {
        return (
            <div>

                <form className="bg-light">
                    <h3 className="text-danger">Weahter API</h3>
                    <div className="form-group">
                        <label htmlFor="city">City</label>
                        <input type="text" className="form-control" id="city" name="city" value={this.state.city} onChange={this.handleChange} />
                    </div>


                    <button className="btn btn-warning mr-5" onClick={this.handleHourly}>Show hourly weather</button>
                    <button className="btn btn-success" onClick={this.handleNow}>Show weather now</button>

                    <p className="text-danger p-3">{this.state.error}</p>
                </form>

            </div>
        );
    }
}

export default Form;
