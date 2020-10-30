import React, { Component } from "react";
import "./FarmDetail.css";
import {sampleFarms} from './loadFarmsData.js';


class FarmDetail extends Component {
  
  state = {
    id: null,
  }
  componentDidMount() {
   // console.log(this.props);
    let id = this.props.match.params.post_id; 
    this.setState({
      id:id
    })
  }
  render() {

    const farmlistsel = sampleFarms.map((farms) => {
      const productSpaced = farms.products.join(", ");
      if (farms.id === this.state.id) {
        return (
          <div className="farm-box" key={farms.id}>
          <div class="row">
          <div class="col s12 m7">
            <div class="card">
              <div class="card-image detail-img">
                <img src={farms.image} alt="hello" />
                <span class="card-title">{farms.name}</span>
                </div>
              <div class="card-content">
                <div className="farm-info">
                    <h6 className="farm-address">{farms.address}</h6>
                    <h6 className="farm-products">{productSpaced}</h6>
                    <p className="farm-descr">
                        This is a general description of the farm. We are a family-led
                        farm south of Fantasy Town. Feeling fed up with the busy city
                        life? Come visit us and learn about our organically grown veggies
                        and fruits. You will never want to buy anything at a supermarket
                        ever again! If you have any questions in advance, feel free to
                        contact us via phone or email. See you soon!
                    </p>
                    <p className="farm-contact">
                        {farms.phone}
                        {farms.email}
                    </p>
                </div>
                </div>
            </div>
          </div>
          </div>
          </div>
        );
      }
      else {
        return null;
      }
    });
    return <div className="show">{farmlistsel}</div>;
  }
}
export default FarmDetail;
