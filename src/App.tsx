import { Button, Text } from 'test-js-lib';
import * as React from 'react';

class App extends React.Component {
  constructor(props: any) {
    super(props);
  }

  public render() {
    return (
      <div className="App">
        hello world
        <Button />
        <Text />
      </div>
    );
  }
}

export default App;
