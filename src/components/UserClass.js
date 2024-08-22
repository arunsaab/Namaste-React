import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    const { name, location, avatar_url } = this.props;
    return (
      <div className="flex flex-col ">
        <img
          className="w-32 h-32 rounded-full mb-4"
          src={avatar_url}
          alt={`${name}'s avatar`}
        />
        <h1 className="font-serif font-semibold text-lg text-gray-800 mb-2">
          Name: {name}
        </h1>
        <h2 className="text-gray-600">Location: {location}</h2>
        <h2 className="text-gray-600 mt-2">
          Contact: arunsinghsaab98@gmail.com
        </h2>
      </div>
    );
  }
}

export default UserClass;
