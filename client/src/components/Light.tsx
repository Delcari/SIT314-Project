import React from "react";

//Square State
type Lprops = {
  status: boolean;
  toggleLight: () => void;
};

class Light extends React.Component<Lprops> {
  constructor(props: Lprops) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <>
      <div className="column">
        <div
          className="globe"
          style={{ backgroundColor: this.props.status ? "yellow" : "grey" }}
          >
        </div>
          <button onClick={this.props.toggleLight}>Toggle Light!</button>
        </div>
      </>
    );
  }
}
export default Light;
