import React, { Component } from 'react';
import './style/ForecastResult.css'
import Chart from "react-apexcharts";


class ForecastResult extends Component {

    state = {
        options: {
            chart: {
                id: "basic-bar"
            },
            xaxis: {
                categories: null
            }
        },
        series: [
            {
                name: "series-1",
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
                    name: "series-1",
                    data: this.props.forecastData.daily ? this.props.forecastData.daily.map(item => (item.temp.day - 273.15).toFixed(1)) : []
                }
            ]
        })
    }

    componentDidUpdate(prevProps, prevState) {

        console.log(prevProps)
        console.log(this.props)

        if (prevProps.forecastData.lat !== this.props.forecastData.lat) {
            this.setState({
                options: {
                    xaxis: {
                        categories: this.props.forecastData.daily ? this.props.forecastData.daily.map(item => this.timeConverter(item.dt)) : []
                    }
                },
                series: [
                    {
                        name: "series-1",
                        data: this.props.forecastData.daily ? this.props.forecastData.daily.map(item => (item.temp.day - 273.15).toFixed(1)) : []
                    }
                ]
            })
        }
    }


    timeConverter(UNIX_timestamp) {
        const a = new Date(UNIX_timestamp * 1000);
        const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        const year = a.getFullYear();
        const month = months[a.getMonth()];
        const date = a.getDate();
        var hour = a.getHours();
        var min = a.getMinutes();
        var sec = a.getSeconds();
        var time = date + ' ' + month;
        return time;
    }

    render() {
        const dailyArr = this.props.forecastData.daily;
        console.log(dailyArr)

        console.log(this.props.forecastData)

        return (
            <div>

                <div className="row">
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
