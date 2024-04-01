import { useState } from "react";
// view
import Index from "./views/Index";
import Test from "./views/Test";




function App() {

  return (
    <Router>
      {/* <IndexRoute component={Index} /> */}
      <Route path="/" component={Index}></Route>
      <Route path="/test" component={Test}></Route>
    </Router>
  );
}

export default App;
