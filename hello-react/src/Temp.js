import React, {Component} from 'react';

class Temp extends Component {
  render() {
    return (<div>
      <div className="form-row">
        <label htmlfor="code" className="control-label">Insert code</label>
        <input type="text" className="form-control" name="code"/>
      </div>

      <div className="form-row">
        <button type="submit" className="btn">Send</button>
      </div>
    </div>);
  }
}

export default Temp;
