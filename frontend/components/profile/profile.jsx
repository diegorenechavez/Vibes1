import React from 'react';
import { Link } from 'react-router-dom';
import PinsIndex from '../pins/pins_index';
import Board from '../boards/board';
import HomeContainer from '../home_container/home_container'

class Profile extends React.Component{
    constructor(props){
        super(props);
        
    }
    componentDidMount(){
      this.props.fetchAllBoards(this.props.match.params.userId).then(()=> this.props.fetchBoardPins());
    }


    render(){
      const {openModal} = this.props;
        return (
          <div>
            <HomeContainer />
            <div className="board-interface">
              <h1 className="username">{this.props.currentUser.username}</h1>
              <h4 className="boards-header">Boards</h4>
              <div className="button-wrapper">
                <button className="new-board-button">+</button>
                <ul className="dropdown-profile">
                  <div className="item-holder">
                    <li
                      className="dropdown-item"
                      onClick={() => openModal("create board")}
                    >
                      Create New Board
                    </li>
                    <li
                      className="dropdown-item"
                      onClick={() => openModal("create pin")}
                    >
                      Create New Pin
                    </li>
                  </div>
                </ul>
              </div>
            </div>
            <div className="boards-index">
              {this.props.boards.map((board, i) => (
                <Board
                  board={board}
                  key={i}
                  currentUser={this.props.currentUser}
                  
                />
              ))}
            </div>
          </div>
        );
    }










}

export default Profile;