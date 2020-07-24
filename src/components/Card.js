import React from 'react';

class Card extends React.Component {
    render() {
        const { name, capital, flag, population, region } = this.props;
        return(
            <>
                <div className="card">
                    <img src={flag} className="card-item-top" alt="flag" />
                    <div className="card-body">
                        <h3 className="card-title">Country : {name}</h3>
                        <h4 className="card-title">
                             Capital : {capital}
                        </h4>
                        <h5 className="card-text">
                            <span className="material-icons">
                                public
                            </span>
                             Région : {region}
                        </h5>
                        <h5 
                            className="card-text">
                                <span className="material-icons">
                                    people_alt
                                </span>
                                Population : {population}
                        </h5>
                    </div>
                </div>
            </>
        );
    }
}

export default Card;