import React, { Component } from 'react'; //import React Component
import './style.css';
import _ from 'lodash';

export default class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            pets: this.props.pets
        }
        this.adopt=(name)=>{
            console.log(name);
            let petIndex = _.findIndex(this.state.pets, {"name":name});
        let newPets = this.state.pets;
        newPets[petIndex].adopted = true;
        this.setState({
            pets: newPets
        })
        }
    }




    render() {
        let pets = this.state.pets;
        let breed = _.groupBy(pets, "breed");
        breed = Object.keys(breed);

        return (
            <> <header className="jumbotron jumbotron-fluid py-4">
                <div className="container">
                    <h1>Adopt a Pet</h1>
                </div>
            </header>


                <main className="container">
                    <div className="row">
                        <div id="navs" className="col-3">
                            <AboutNav />
                            <BreedNav breeds={breed} />
                        </div>
                        <div id="petList" className="col-9">
                            <PetList pets={this.state.pets} adoptCallback={this.adopt} />
                        </div>
                    </div>
                </main>

                <footer className="container">
                    <small>Images from <a href="http://www.seattlehumane.org/adoption/dogs">Seattle Humane Society</a></small>
                </footer>
            </>
        );
    }
}




export class AboutNav extends Component {
    render() {
        return (
            <nav id="aboutLinks">
                <h2>About</h2>
                <ul className="list-unstyled">
                    <li><a href="#">How to Adopt</a></li>
                    <li><a href="#">Volunteering</a></li>
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Donate</a></li>
                    <li><a href="#">About Us</a></li>
                </ul>
            </nav>)
    }
}

export class BreedNav extends Component {


    render() {
        let breeds = this.props.breeds;
        let breedsLi = breeds.map(item => <li key={item}><a href="">{item}</a></li>)
        return <nav id="breedLinks">
            <h2>Pick a Breed</h2>
            <ul className="list-unstyled">
                {breedsLi}
            </ul>
        </nav>

    }
}

export class PetCard extends Component {
    render() {
        let cards = this.props.cardInfo;

        return(<div className="card" onClick={()=>this.props.adoptCallback(cards.name)}>
            <img className="card-img-top" src={cards.img} alt={cards.name} />
            <div className="card-body">
                <h3 className="card-title">{cards.adopted?cards.name + " (Adopted)":cards.name} </h3>
                <p className="card-text">{cards.sex + " " + cards.breed}</p>
            </div>
        </div>)
    }
}

export class PetList extends Component {
    render() {
        let cards = this.props.pets;
        console.log(cards);
        let cardList = cards.map(
            item => <PetCard cardInfo = {item} adoptCallback={this.props.adoptCallback} />
        )
        return <div id="petList" className="col-9">
            <h2>Dogs for Adoption</h2>
            <div className="card-deck">{cardList}</div>
        </div>
    }
}
