import React from "react";
import LoaderImg from 'images/loader.svg'

class Loader extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="loader">
                    <img src={LoaderImg} />
                </div>
            </React.Fragment>
        );
    }
}
export default Loader;