import * as React from 'react';
import { Panel } from 'react-bootstrap';
import { BootstrapTable, TableHeaderColumn, BootstrapTableProps } from 'react-bootstrap-table';
import { RootStateType, BorrowerType } from '../../constants/types';
import { connect } from 'react-redux';
import { borrowerIndexChanged } from '../../redux/Grid/actions';

const mapStateToProps = (state: RootStateType): BorrowerPanelProps => {
    return { borrowers: state.Grid.AllBorrowers, borrowerIndexChanged: () => false };
};
// tslint:disable-next-line:no-any
const mapDispatchToProps = (dispatch: any) => {
    return {
        borrowerIndexChanged: (borrower: BorrowerType) => dispatch(borrowerIndexChanged(borrower))
    };
};

interface BorrowerPanelProps {
    borrowers: BorrowerType[];
    borrowerIndexChanged(borrower: BorrowerType): void;
}
interface BorrowerPanelState {
    borrower: BorrowerType;
}
class BorrowerPanelInner extends React.Component<BorrowerPanelProps, BorrowerPanelState> {

    handleIndexChange(row: BorrowerType, isSelected: boolean, e: {}): boolean {
        this.props.borrowerIndexChanged(row);
        return true;
    }

    render() {
        const debugEle: (JSX.Element | null) = (
            this.state !== null
                ? <p>Info here: {this.state.borrower}</p>
                : null
        );

        const tableProps: BootstrapTableProps = {
            data: this.props.borrowers,
            selectRow: {
                mode: 'radio',
                bgColor: 'lightgrey',
                hideSelectColumn: true,
                clickToSelectAndEditCell: true,
                onSelect: this.handleIndexChange.bind(this)
            }
        };

        return (
            <Panel id="borrower-panel">
                <Panel.Heading>Borrowers</Panel.Heading>
                <Panel.Body>
                    {debugEle}
                    <BootstrapTable {...tableProps}>
                        <TableHeaderColumn dataField="id" isKey={true}>Id</TableHeaderColumn>
                        <TableHeaderColumn dataField="name">Name</TableHeaderColumn>
                    </BootstrapTable>
                </Panel.Body>
            </Panel>
        );
    }
}

const BorrowerPanel = connect(mapStateToProps, mapDispatchToProps)(BorrowerPanelInner);
export default BorrowerPanel;