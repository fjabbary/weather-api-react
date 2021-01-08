import React, { Component } from 'react';
import './style/ForecastResult.css'
import Chart from "react-apexcharts";


class ForecastResult extends Component {

    state = {
        options: {
            chart: {
                id: "basic-bar",
                height: 25
            },
            xaxis: {
                categories: null,
                title: {
                    text: "Temperature in the next 7 days"
                }
            },
            yaxis: {
                title: {
                    text: "Temperature °C"
                }
            },
            markers: {
                size: 5
            },
            dataLabels: {
                enabled: true,
            },
            stroke: {
                curve: 'smooth',
            }
        },
        series: [
            {
                name: "",
                data: []
            }
        ]
    };

    componentDidMount() {
        this.setState({
            options: {
                xaxis: {
                    categories: this.props.forecastData.daily ? this.props.forecastData.daily.map(item => this.timeConverter(item.dt)) : []
                }
            },
            series: [
                {
                    name: "",
                    data: this.props.forecastData.daily ? this.props.forecastData.daily.map(item => (item.temp.day - 273.15).toFixed(1)) : []
                }
            ]
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.forecastData.lat !== this.props.forecastData.lat) {
            this.setState({
                options: {
                    xaxis: {
                        categories: this.props.forecastData.daily ? this.props.forecastData.daily.map(item => this.timeConverter(item.dt)) : []
                    }
                },
                series: [
                    {
                        name: " ",
                        data: this.props.forecastData.daily ? this.props.forecastData.daily.map(item => (item.temp.day - 273.15).toFixed(1)) : []
                    }
                ]
            })
        }
    }


    timeConverter(UNIX_timestamp) {
        const a = new Date(UNIX_timestamp * 1000);
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        // const year = a.getFullYear();
        const month = months[a.getMonth()];
        const date = a.getDate();
        // var hour = a.getHours();
        // var min = a.getMinutes();
        // var sec = a.getSeconds();
        var time = date + ' ' + month;
        return time;
    }

    render() {
        const dailyArr = this.props.forecastData.daily;

        return (
            <div>

                <div className="row mt-5">
                    <div className="mixed-chart">
                        <Chart
                            options={this.state.options}
                            series={this.state.series}
                            type="line"
                            width="500"
                        />

                    </div>
                </div>

            </div>
        );
    }
}

export default ForecastResult;
