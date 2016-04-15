import React, {Component, PropTypes} from 'react';

require('./styles.css');


export default class MenuSection extends Component {

    static propTypes = {
        menu: PropTypes.object.isRequired
    };

    shouldComponentUpdate() {
        return false;
    }

    render() {
        const {menu} = this.props;

        const starters = menu.starters.map((starter, index) => {
            return <li key={''+Date.now()+''+index}>{starter}</li>
        });

        const mains = menu.mains.map((main, index) => {
            return <li key={''+Date.now()+''+index}>{main}</li>
        });

        const desserts = menu.desserts.map((dessert, index) => {
            return <li key={''+Date.now()+''+index}>{dessert}</li>
        });


        return (
            <section className='menu'>
                <h1>{menu.restaurant} Menu</h1>
                <h3>{menu.date}</h3>
                <hr />
                <h2>Starter</h2>
                <ol>
                    {starters}
                </ol>
                <hr />
                <h2>Main</h2>
                <ol>
                    {mains}
                </ol>
                <hr />
                <h2>Dessert</h2>
                <ol>
                    {desserts}
                </ol>
            </section>
        )
    }

}
