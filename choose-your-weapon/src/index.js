import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function Weapon(props) {
    return (
        <button className='weapon' onClick={props.onClick}>
            {props.value}
        </button>
    );
}

class Board extends React.Component {
    renderWeapon(i) {
        return (
            <Weapon 
                value={i}
                // onClick={() => this.props.onClick(i)}
            />
        );
    }

    render () {
        return (
            <div>
                <h2>Player A</h2>
                <div className='board-row'>
                    {this.renderWeapon(0)}
                    {this.renderWeapon(1)}
                    {this.renderWeapon(2)}
                </div>
                <h2>Player B</h2>
                <div className='board-row'>
                    {this.renderWeapon(0)}
                    {this.renderWeapon(1)}
                    {this.renderWeapon(2)}
                </div>
            </div>
        );
    }
}

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            weapons: Array(3).fill.null,
            bIsNext: true,
        }
    }

    // handleClick(i) {
    //     const weapons = weapons.slice() - 1;
    //     if (calculateWinner(weapons) || weapons[i]) {
    //         return;
    //     }
    //     weapons[i] = this.state.bIsNext ? 'pierre' : 'feuille'
    // }

    render() {
        return (
            <div className='game'>
                <h1>Chifoumi</h1>
                <div className='game-board'>
                    <Board 
                        // onClick={(i) => this.handleClick(i)}
                    />
                </div>
                <div className='game-info'>

                </div>
            </div>
        );
    }
}

// ====================================================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);