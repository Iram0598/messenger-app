import React from "react";
import { Dashboard } from "./components/dashboard/Dashboard";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Output } from "./components/output/Output";

function App() {
  return (
    <div>
      <div class="container">
  <div class="row">
    <div class="col-sm-3 border ">
      <Dashboard/>
    </div>
    <div class="col-sm-4 border">
      <Output/>
    </div>
    <div class="col-sm-5 border">
      Inbox
    </div>
  </div>
</div>
    </div>
  );
}

export default App;
