import React, {Component} from "react";
import Loading from "../../components/hocComponents/Loading";

export default Cmp => {
    return class extends Component {
        render() {
            const {isLoading, ...passedProps} = this.props;
            if (isLoading) {
                return <Loading/>
            }

            return <Cmp {...passedProps} />;
        }
    }
}