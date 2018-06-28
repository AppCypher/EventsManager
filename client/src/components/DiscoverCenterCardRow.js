import React from 'react';
import { connect } from 'react-redux';
import DiscoverCenterCard from '../components/DiscoverCenterCard';

class DiscoverCenterCardRow extends React.Component {
  render() {
    let centers = [...this.props.center.centers];

    // If this component has a `type` prop with `near` value.
    if (this.props.type && this.props.type === 'near') {
      centers = centers.filter(eventCenter => eventCenter.location.trim().toLowerCase() === 'lagos');
    }

    // Count
    let count = -1;

    // Create a cardElements.
    const centerCardElements = centers.map((center) => {
      // Get details of each center.
      const {
        id, picture1, name, type, location, description,
      } = center;

      // Increment count.
      count += 1;

      // Return a card.
      return (<div onClick={this.props.showViewCenterModal(id, count)} className="col-6 col-md-4 col-lg-3"><DiscoverCenterCard imageUrl={picture1} name={name} type={type} location={location} description={description} /></div>);
    });

    this.state = { centerCardElements };

    return (
      <div className="row io-top-row">{this.state.centerCardElements}</div>
    );
  }
}

const mapStateToProps = ({ center }) => ({ center });

export default connect(
  mapStateToProps,
  {},
)(DiscoverCenterCardRow);
