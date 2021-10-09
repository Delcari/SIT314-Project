import React, { useState, useEffect, useCallback} from 'react';

import { useSubscription } from 'mqtt-react-hooks';
import { any } from 'prop-types';

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
            {this.props.log.map((x) => ( 
                <body>{x}</body>
               ))}
            </div>
        );
  }
}
export default Log