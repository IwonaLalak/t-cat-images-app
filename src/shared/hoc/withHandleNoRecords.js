import React, {Component} from "react";
import NoRecords from "../../components/hocComponents/NoRecords";

export default Cmp => {
    return class extends Component {
        render() {
            const {isLoading, isComplete, hasNoRecords, ...passedProps} = this.props;
            if (!isLoading && isComplete && hasNoRecords) {
                return <NoRecords/>
            }
            else
                return <Cmp {...passedProps} />;
        }
    }
}