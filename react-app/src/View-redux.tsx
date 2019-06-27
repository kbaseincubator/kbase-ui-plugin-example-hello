import { Dispatch, Action } from "redux";
import { connect } from "react-redux";
import { appSetTitle } from "./redux/actions";
import { StoreState } from "./redux/store";
import View from "./View";

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
      dispatch(appSetTitle(title) as any);
    }
  };
}

export default connect<StateProps, DispatchProps, OwnProps, StoreState>(
  mapStateToProps,
  mapDispatchToProps
)(View);
