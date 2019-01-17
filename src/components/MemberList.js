import React, { Component, Fragment} from 'react';

class MemberList extends Component {
    render() {
      return (
        <Fragment>
            {this.props.people.map((member, index) => {
            return (
              <li className="member" key={index}>
                <h2 className="name">{member.name.title} {member.name.first} {member.name.last}</h2>
                <img src={member.picture.medium} alt={member.name.last}/>
                <p className="">{member.location.city}</p>
                <p className="age">{member.dob.age}</p>
              </li>
            )
          })}
        </Fragment>
      );
    }
  }

  export default MemberList;