import * as React from 'react';
import { Panel } from 'react-bootstrap';
import { RootStateType, BorrowerType } from '../../constants/types';
import { connect } from 'react-redux';
import { BootstrapTable, TableHeaderColumn, BootstrapTableProps, TableHeaderColumnProps } from 'react-bootstrap-table';
import { formatAmount, formatDate } from '../../constants/helpers';

import './styles.css';
const userIcon = require('./user.svg') as string;

const mapStateToProps = (state: RootStateType): InfoPanelProps => {
    let selectedBorrower = state.Grid.SelectedBorrower !== null
        ? state.Grid.SelectedBorrower
        : state.Grid.SelectedLoan !== null
            ? state.Grid.SelectedLoan.borrower
            : null;
    return { borrower: selectedBorrower };
};

interface InfoPanelProps {
    borrower: (BorrowerType | null);
}
class InfoPanelInner extends React.Component<InfoPanelProps, {}> {

    buildBorrowerLabel(): JSX.Element {
        if (this.props.borrower === null) {
            return (
                <div id="borrower-label">
                    <h2>Select borrowers or loans from the table below.</h2>
                </div>
            );
        } else {
            return (
                <div id="borrower-label">
                    <img src={userIcon} />
                    <h3>{this.props.borrower.name}</h3>
                </div> 
            );
        }
    }

    buildTable(): JSX.Element {
        if (this.props.borrower === null) {
            return this.buildBorrowerLabel();
        } else {
            // Declare options for the table and headers.
            const tableProps: BootstrapTableProps = {
                data: this.props.borrower.loans ? this.props.borrower.loans : [],
                insertRow: true,
                deleteRow: true
            };
            const idProps: TableHeaderColumnProps = {
                dataField: 'id',
                isKey: true,
                hiddenOnInsert: true
            };
            const nameProps: TableHeaderColumnProps = {
                dataField: 'name'
            };
            let amountProps: TableHeaderColumnProps = {
                dataField: 'amount',
                dataAlign: 'right',
                dataFormat: formatAmount,
                headerAlign: 'left'
            };
            let dateProps: TableHeaderColumnProps = {
                dataField: 'estClose',
                dataAlign: 'center',
                dataFormat: formatDate,
                headerAlign: 'left'
            };

            return (
                <div>
                    {this.buildBorrowerLabel()}
                    <BootstrapTable {...tableProps}>
                        <TableHeaderColumn {...idProps}>Loan ID</TableHeaderColumn>
                        <TableHeaderColumn {...nameProps}>Name</TableHeaderColumn>
                        <TableHeaderColumn {...amountProps}>Amount</TableHeaderColumn>
                        <TableHeaderColumn {...dateProps}>Est Close</TableHeaderColumn>
                    </BootstrapTable>
                </div>
            );
        }
    }

    render() {

        return (
            <Panel id="info-panel">
                <Panel.Heading> Info </Panel.Heading>
                <Panel.Body>
                    {this.buildTable()}
                </Panel.Body>
            </Panel>
        );
    }
}

const InfoPanel = connect(mapStateToProps)(InfoPanelInner);
export default InfoPanel;