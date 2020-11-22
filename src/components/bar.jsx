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
            { x: 'October', y: 1.36 },
            { x: 'November', y: 18 }
        ];

        return (
            <XYPlot xType="ordinal" width={300} height={500} xDistance={100}>
                <VerticalBarSeries className="vertical-bar-series-example" data={data} />
                <XAxis />
                <YAxis />
            </XYPlot>

        );
    }
}

export default BarGraph;