import { Text, Button } from 'test-js-lib';
import * as React from 'react';

class App extends React.Component {
  constructor(props: any) {
    super(props);
    /**
     * If only the ButtonCalled function is imported and used, the Button function will not be output in the built JS
     * even though they are in the same file.
     * @type {any}
     */
    // let a = ButtonCalled();
    // console.log(a);

    /**
     * Calling the Button function will output it into the built JS file even though the result is not used
     */
    // ButtonCalled();
  }

  /**
   * Import and render both elements - both elements will be added to the built JS.
   * Even though the Button includes two functions, Button() and ButtonCalled(),
   * ButtonCalled() is not included in the built JS as it has not been exported by index.js.
   */
  // public render() {
  //   return (
  //     <div className="App">
  //       hello world
  //       <Button />
  //       <Text />
  //     </div>
  //   );
  // }

  /**
   * Import and render only Text element - Button will not be included in the built JS
   */
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
