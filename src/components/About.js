import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);

    console.log("p Constructor");
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        avatar_url: "",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/arunsaab");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
    console.log("p CDM");
  }

  componentDidUpdate() {
    console.log("p CDU");
  }

  componentWillUnmount() {
    console.log("p CWU");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    console.log("p render");
    return (
      <div>
        <h1>About Us</h1>
        <h2>This is Namaste React</h2>
        <UserClass name={name} location={location} avatar_url={avatar_url} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>
//       <h1>About Us</h1>
//       <h2>This is Namaste React</h2>
//       <User name={"Arun Singh (fn)"} />
//       <UserClass name={"Aditya Singh (cc)"} location={"Pune"} />
//     </div>
//   );
// };

export default About;
