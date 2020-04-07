import React from "react";
import { connect } from "react-redux";
import { eat, play, nap } from "../redux/actions";

const Activity = ({ activity, eat, play, nap }) => (
    <>
        <h1>What is the cat doing?</h1>
        <p>The cat is {activity}</p>
        <button onClick={()=> eat()}>Eating</button>
        <button onClick={()=> play()}>Playing</button>
        <button onClick={()=> nap()}>Napping</button>
    </>
)

const mapStateToProps = state => {
    const { activity } = state;
    return activity;
}
export default connect(
    mapStateToProps, // mapStateToProps - What do I want?
    { eat, play, nap} // mapDispatchToProps - What do I want to do?
)(Activity);

