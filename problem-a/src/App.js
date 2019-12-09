import React, { Component } from 'react'; //import React Component

const EXAMPLE_SENATORS = [
  { id: 'C000127',  name: 'Maria Cantwell', state: 'WA',  party: 'Democrat', phone: '202-224-3441', twitter: 'SenatorCantwell' },
  { id: 'M001111', name: 'Patty Murray', state: 'WA', party: 'Democrat', phone: '202-224-2621', twitter: 'PattyMurray' }
];

/* Your code goes here */

export class App extends React.Component {

  // defines what it looks like; return a dom node
  render() {
    let year = 2019
    // You cannot use class instead--> className because class is a keyword in java script.
    return <div className='container'>  {/* a comment */}
      <h1>US Senators {year}</h1>
      <SenatorTable senators = {this.props.senators} /> {/* We can inclde the table in the app */}
    </div>;
  }
}

export class SenatorTable extends Component {
    render() {
        let senatorRows = this.props.senators.map((senator) => {
          return <SenatorRow key = {senator.id} senator = {senator}/>;
        });

        return <table className = "table table-bordered">
        <TableHeader cols={['Name', 'State', 'Phone', 'Twitter']}/><tbody>{senatorRows}</tbody>
        </table>
    }
}

export class TableHeader extends Component {
    render() {
        let colElements = this.props.cols.map((aColName) => {
            return <th key = {aColName}>{aColName}</th>;
        });

        return (
          <thead>
            <tr>
              {colElements}
            </tr>
          </thead>
        );
    }
}

export class SenatorRow extends Component {
    render() {
        return (
            <tr>
              <td>
                {this.props.senator.name}
              </td>
              <td>
                {this.props.senator.party.charAt(0)} - {this.props.senator.state}
              </td>
              <td>
                <a href={'tel:' + this.props.senator.phone}>{this.props.senator.phone}</a>
              </td>
              <td>
                <a href={'https://twitter.com/' + this.props.senator.twitter}>@{this.props.senator.twitter}</a>
              </td>
            </tr>
        );
    }
}
