import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const { name, location, avatar_url } = this.props;
    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h1>Name: {name} </h1>
        <h2>Location: {location}</h2>
        <h2>Contact: arunsinghsaab98@gmail.com</h2>
      </div>
    );
  }
}

export default UserClass;
