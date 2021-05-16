import React, { Fragment, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
// import PostItem from './PostItem';
// import PostForm from './PostForm';
import { getPosts } from "../actions/post";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
const Posts = ({ getPosts, post: { posts } }) => {
	useEffect(() => {
		getPosts();
	}, [getPosts]);

	return (
		<Fragment>
			
            <div>
			{/* <Navbar /> */}
			{posts.map((data, key) =>
			<Card className="my-5" sborder="primary">
				<Card.Header as="h5">{data.title}</Card.Header>
				<Card.Body>
					<Card.Text>
					{data.text}
					</Card.Text>
					<Button variant="primary" disabled>{data.name}</Button>
				</Card.Body>
			</Card>
			)}
		</div>
			{/* <PostForm />
			<div className="posts">
				{posts.map((post) => (
					<PostItem key={post._id} post={post} />
				))}
			</div> */}
		</Fragment>
	);
};

Posts.propTypes = {
	getPosts: PropTypes.func.isRequired,
	post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
	post: state.post,
});

export default connect(mapStateToProps, { getPosts })(Posts);
