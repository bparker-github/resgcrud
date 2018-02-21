import * as React from 'react';
import { Panel } from 'react-bootstrap';
import { LoanType, RootStateType } from '../../constants/types';
import { connect } from 'react-redux';
import { BootstrapTable, TableHeaderColumn, TableHeaderColumnProps, BootstrapTableProps } from 'react-bootstrap-table';
import { formatAmount, formatDate } from '../../constants/helpers';
import { loanIndexChanged } from '../../redux/Grid/actions';

const mapStateToProps = (state: RootStateType): LoanPanelProps => {
    return { loans: state.Grid.AllLoans, loanIndexChanged: () => false };
};
// tslint:disable-next-line:no-any
const mapDispatchToProps = (dispatch: any) => {
    return {
        loanIndexChanged: (loan: LoanType) => dispatch(loanIndexChanged(loan))
    };
};

interface LoanPanelProps {
    loans: LoanType[];
    loanIndexChanged(loan: LoanType): void;
}
class LoanPanelInner extends React.Component<LoanPanelProps, {}> {

    handleIndexChange(row: LoanType, isSelected: boolean, e: {}): boolean {
        this.props.loanIndexChanged(row);
        return true;
    }
    render() {
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

        const tableProps: BootstrapTableProps = {
            data: this.props.loans,
            selectRow: {
                mode: 'radio',
                bgColor: 'lightgrey',
                hideSelectColumn: true,
                clickToSelectAndEditCell: true,
                onSelect: this.handleIndexChange.bind(this)
            }
        };

        return (
            <Panel id="loan-panel">
                <Panel.Heading> Loans </Panel.Heading>
                <Panel.Body>
                    <BootstrapTable {...tableProps}>
                        <TableHeaderColumn dataField="id" isKey={true}>Id</TableHeaderColumn>
                        <TableHeaderColumn dataField="name">Name</TableHeaderColumn>
                        <TableHeaderColumn {...amountProps}>Amount</TableHeaderColumn>
                        <TableHeaderColumn {...dateProps}>Est Close</TableHeaderColumn>
                    </BootstrapTable>
                </Panel.Body>
            </Panel>
        );
    }
}

const LoanPanel = connect(mapStateToProps, mapDispatchToProps)(LoanPanelInner);
export default LoanPanel;