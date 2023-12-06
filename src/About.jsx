import React from 'react';

class About extends React.Component {
  
  render() {
    const { specializarea, anul, grupa, color } = this.props.grp;
    const { setCuloareText } = this.props;

    return (
        <div className="grp-details">
      <h1 style={{ color }}>
        Specializarea: {specializarea} <br />
        Anul: {anul} <br />
        Grupa: {grupa} <br></br>
        <button type="button" onClick={setCuloareText}>
          Apasă aici pentru a schimba stilizarea
        </button>
      </h1>
      </div>
    );
  }
}
export default About;
