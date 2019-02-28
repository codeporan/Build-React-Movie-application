import React, { Component } from "react";
import { connect } from "react-redux";
import { getPeople } from "../../actions/Actoractions";
import Person from "../../components/Actor/ActorCard";
import Pagination from "react-js-pagination";
class Personlist extends Component {
  componentDidMount() {
    this.props.dispatch(getPeople());
  }
  handlePageChange = pagenumber => {
    this.props.dispatch(getPeople(pagenumber));
  };
  render() {
    const { actorlist } = this.props.actor;
    return (
      <div>
        <Person person={actorlist} />
        {actorlist ? (
          <div className="col-md-12 text-center">
            <div className="pagination_wrapper">
              <Pagination
                activePage={actorlist.page}
                itemsCountPerPage={20}
                totalItemsCount={actorlist.total_results}
                pageRangeDisplayed={5}
                innerClass="pagination"
                itemClass="page-item"
                linkClass="page-link"
                disabledClass="disabled"
                activeClass="current"
                onChange={this.handlePageChange}
              />
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
const mapState = state => ({
  actor: state.actor
});
export default connect(mapState)(Personlist);
