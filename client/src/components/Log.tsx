import React from 'react';

//Square State
type Lprops = {
    log: string[]
};

class Log extends React.Component<Lprops> {
  constructor(props: Lprops) {
    super(props);
  }


  render(): JSX.Element {
    return (
          <div className="scrollbox">
            {this.props.log.map((msg) => ( 
                <body>{msg}</body>
               ))}
            </div>
        );
  }
}
export default Log