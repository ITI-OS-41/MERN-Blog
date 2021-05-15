import React, {useEffect} from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getCurrentUserProfile } from "../actions/profile";
const Dashboard = ({ getCurrentUserProfile, auth, profile}) => {
    useEffect(() => {
        getCurrentUserProfile();
      }, [getCurrentUserProfile]);
	return <div>Dashhhh</div>;
};

Dashboard.propTypes = {
	getCurrentUserProfile: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired,
	profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	profile: state.profile,
});

export default connect(mapStateToProps, { getCurrentUserProfile })(Dashboard);
