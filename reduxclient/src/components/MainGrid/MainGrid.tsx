import * as React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import InfoPanel from '../InfoPanel/InfoPanel';
import BorrowerPanel from '../BorrowerPanel/BorrowerPanel';
import LoanPanel from '../LoanPanel/LoanPanel';
import { LoanType, BorrowerType } from '../../constants/types';
import { connect } from 'react-redux';
import { loadedLoans, loadedBorrowers } from '../../redux/Grid/actions';
import './styles.css';

// tslint:disable-next-line:no-any
const mapDispatchToProps = (dispatch: any) => {
    return {
        loadedLoans: (loans: LoanType[]) => dispatch(loadedLoans(loans)),
        loadedBorrowers: (borrowers: BorrowerType[]) => dispatch(loadedBorrowers(borrowers))
    };
};

interface MainGridProps {
    loadedLoans(loans: LoanType[]): LoanType[];
    loadedBorrowers(borrowers: BorrowerType[]): BorrowerType[];
}
class MainGridInner extends React.Component<MainGridProps> {

    componentDidMount() {
        fetch('http://localhost:8080/loan')
            .then((result: Response) => result.json())
            .then((json: {}) => json as LoanType[])
            .then((loans: LoanType[]) => this.props.loadedLoans(loans));

        fetch('http://localhost:8080/borrower')
            .then((result: Response) => result.json())
            .then((json: {}) => json as BorrowerType[])
            .then((borrowers: BorrowerType[]) => this.props.loadedBorrowers(borrowers));
    }

    // tslint:disable-next-line:no-any
    render(): (React.ReactElement<any> | null) {
        return (
            <Grid id="grid">
                <Row id="grid-info">
                    <Col xs={12} lg={12}>
                        <InfoPanel />
                    </Col>
                </Row>
                <Row>
                    <Col xs={6} lg={6}>
                        <BorrowerPanel />
                    </Col>
                    <Col xs={6} lg={6}>
                        <LoanPanel />
                    </Col>
                </Row>
            </Grid>
        );
    }
}

const MainGrid = connect(null, mapDispatchToProps)(MainGridInner);
export default MainGrid;