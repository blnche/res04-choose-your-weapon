import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            computerChoice: null,
            computerChoiceString: null,
            userChoice: null,
            status: null,
        };
    }

    logic = (userChoice, computerChoice) => {
        if (computerChoice === userChoice) {
            this.setState({status: 'nobody wins'});
            console.log('nobody wins');
            return 0;
        }
        else if ((computerChoice === 0 && userChoice === 1) || (computerChoice === 1 && userChoice === 2) || (computerChoice === 2 && userChoice === 0)) { 
            this.setState({status: 'Players wins'});
            console.log('player wins');
            return 1;
        }
        else {
            this.setState({status: 'Players loses'});
            console.log('player loses');
            return -1;
        }

    }

    computerDecision = (computerChoice) => {
        if (computerChoice === 0) {
            this.setState({computerChoiceString: 'Pierre'});
            return;
        }
        else if (computerChoice === 1) {
            this.setState({computerChoiceString: 'Feuille'});
            return;
        }
        else {
            this.setState({computerChoiceString: 'Ciseaux'});
            return;
        }
    }
    
    handleClick(i) {

        this.setState({computerChoice: Math.floor(Math.random(3) * 3)});

        console.log(this.state.userChoice);
        
        if (i === 'pierre') {
            this.setState({userChoice: 0});
            
        } else if (i === 'feuille') {
            this.setState({userChoice: 1});
            
        } else if (i === 'ciseaux') {
            this.setState({userChoice: 2});
            
        }

        this.logic(this.state.userChoice, this.state.computerChoice);
        this.computerDecision(this.state.computerChoice);

        console.log(this.state.computerChoice);
        console.log(this.state.userChoice);

    }

    render() {
        return (
            <div className='game'>
                <h1>Chifoumi</h1>
                <div className='game-board'>
                    <h2>Choose your weapon </h2>
                    <button className='weapon' onClick={(i) => this.handleClick('pierre')}>
                    <i className="fa-solid fa-hand-back-fist"></i>
                    </button>
                    <button className='weapon' onClick={(i) => this.handleClick('feuille')}>
                    <i className="fa-solid fa-hand"></i>
                    </button>
                    <button className='weapon' onClick={(i) => this.handleClick('ciseaux')}>
                    <i className="fa-solid fa-hand-scissors"></i>
                    </button>
                </div>
                <div className='game-info'>
                    <div className='game-result'>
                        <p>Computer chose {this.state.computerChoiceString}</p>
                        <p>{this.state.status}</p>
                    </div>
                </div>
            </div>
        );
    }
}

// ====================================================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);