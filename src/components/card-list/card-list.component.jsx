import Card from "../card/card.component";

import './card-list.styles.css';

const CardList = ({ monsters }) => (
    <div className="card-list">
        {monsters.map((monster) => {
            return <Card monster={monster} key={monster.id} />;
        })}
    </div>
)

// class CardList extends Component {
//     render() {
//         const { monsters } = this.props;

//         return (
//             <div className="card-list">
//                 {monsters.map((monster) => {
//                     return (
//                         <Card monster={monster} key={monster.id}/>
//                     )
//                 })}
//             </div>
//         )
//     }
// }

export default CardList;