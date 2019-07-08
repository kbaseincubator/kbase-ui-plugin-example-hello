import { Dispatch, Action } from 'redux';
import { connect } from 'react-redux';
// import { appSetTitle } from '@kbase/ui-lib';
import { appSetTitle } from './kbaseUI/redux/integration/actions';
import { StoreState } from './redux/store';
import View from './View';

export interface OwnProps {}

interface StateProps {}

interface DispatchProps {
    setTitle: (title: string) => void;
}

function mapStateToProps(state: StoreState, props: OwnProps) {
    return {};
}

function mapDispatchToProps(dispatch: Dispatch<Action>, ownProps: OwnProps): DispatchProps {
    return {
        setTitle: (title: string) => {
            console.log('dispatching set title', title);
            dispatch(appSetTitle(title) as any);
        }
    };
}

export default connect<StateProps, DispatchProps, OwnProps, StoreState>(
    mapStateToProps,
    mapDispatchToProps
)(View);
