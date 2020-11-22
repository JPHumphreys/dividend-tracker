import React, { Component } from 'react';
import {
    XYPlot,
    XAxis,
    YAxis,
    VerticalBarSeries,
} from 'react-vis';

class BarGraph extends Component {
    state = {}
    render() {
        const data = [
            { x: 'October', y: 10 },
            { x: 'November', y: 5 },
            { x: 'December', y: 15 }
        ];

        return (
            <XYPlot xType="ordinal" width={300} height={300} xDistance={100}>
                <VerticalBarSeries className="vertical-bar-series-example" data={data} />
                <XAxis />
                <YAxis />
            </XYPlot>

        );
    }
}

export default BarGraph;