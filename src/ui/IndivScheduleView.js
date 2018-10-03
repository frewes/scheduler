import React from 'react';
import ReactDataSheet from 'react-datasheet';

import { Table } from 'reactstrap';


export default class IndivScheduleView extends React.Component {
    render() {
        return (
            <div>
                <strong>Individual Schedules</strong>
                <ReactDataSheet
                    data={this.props.data}
                    valueRenderer={(cell) => cell.value}
                    sheetRenderer={(props) => (
                        <Table className="datagrid-custom">
                            <tbody>
                            {props.children}
                            </tbody>
                        </Table>
                    )}
                />
            </div>
        )
    }
}