import React, {Component} from "react";
import RequestError from "../../components/hocComponents/RequestError";

export default Cmp => {
    return class extends Component {
        render() {
            const {isLoading, isComplete, isError, ...passedProps} = this.props;
            if (!isLoading && isError && !isComplete) {
                return <RequestError/>
            }
            else
                return <Cmp {...passedProps} />;
        }
    }
}