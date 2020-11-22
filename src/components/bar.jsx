import React, { Component } from 'react';
import { XYPlot, VerticalBarSeries as BarSeries } from 'react-vis';

class BarGraph extends Component {
    state = {}
    render() {
        const data = [
            { x: 'October 2020', y: 10 },
            { x: 'November 2020', y: 5 },
            { x: 'December 2020', y: 15 }
        ];

        return (
            <XYPlot
                height="500"
                width="500">
                <BarSeries data={data} color="steelblue" />
            </XYPlot>

        );
    }
}

export default BarGraph;