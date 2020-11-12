import React, { Component } from 'react';
import { XYPlot, VerticalBarSeries as BarSeries } from 'react-vis';

class BarGraph extends Component {
    state = {}
    render() {
        const data = [
            { x: 'October', y: 10 },
            { x: 'November', y: 5 },
            { x: 'December', y: 15 }
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