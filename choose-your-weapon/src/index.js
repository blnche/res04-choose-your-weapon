import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            computerChoice: -1,
            userChoice: -1,
            status: null,
        };
    }

    computerChoiceHandle() {
        this.setState({computerChoice: Math.floor(Math.random() * 3)});
        console.log(this.state.computerChoice);
        return;
    }
    
    handleClick(i) {
        computerChoiceHandle();

        console.log(this.state.userChoice);

        if (i === 'pierre') {
            console.log('pierre - 1');
            this.setState({userChoice: 1});
            
        } else if (i === 'feuille') {
            console.log('feuille - 2');
            this.setState({userChoice: 2});
            
        } else if (i === 'ciseaux') {
            console.log('ciseaux - 3');
            this.setState({userChoice: 3});
            
        }

        console.log(this.state.userChoice);

        if ((this.state.computerChoice === 1 && this.state.userChoice === 2) || (this.state.computerChoice === 2 && this.state.userChoice === 3) || (this.state.computerChoice === 3 && this.state.userChoice === 1)) { 
            this.setState({status: 'Players wins'});
            console.log('player wins');
        }
        else if ((this.state.computerChoice === 1 && this.state.userChoice === 3) || (this.state.computerChoice === 2 && this.state.userChoice === 1) || (this.state.computerChoice === 3 && this.state.userChoice === 2)) {
            this.setState({status: 'Players loses'});
            console.log('player loses');
        }
        else if (this.state.computerChoice === this.state.userChoice) {
            this.setState({status: 'nobody wins'});
            console.log('nobody wins');
        }
    }

    render() {
        return (
            <div className='game'>
                <h1>Chifoumi</h1>
                <div className='game-board'>
                    <h2>Player weapons : </h2>
                    <button className='weapon' onClick={(i) => this.handleClick('pierre')}>
                        Pierre
                    </button>
                    <button className='weapon' onClick={(i) => this.handleClick('feuille')}>
                        Feuille
                    </button>
                    <button className='weapon' onClick={(i) => this.handleClick('ciseaux')}>
                        Ciseaux
                    </button>
                </div>
                <div className='game-info'>
                    <div className='game-result'>
                
                    </div>
                </div>
            </div>
        );
    }
}

// ====================================================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Game />);