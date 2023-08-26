import '../styles/ShoppingList.css';
import { plantList } from "../datas/plantList";
import Sold from "./Sold";

function ShoppingList() {
/*     const categories = plantList.reduce(
        (acc, plant) => acc.includes(plant.category) ? acc : acc.concat(plant.category),
        []
    ); */
    return (
        <div>
            <ul className="lmj-plant-list">
                {plantList.map((plant, index) => (
                    <li key={plant.id} className="lmj-plant-item">
                        {plant.name}
                        {plant.isSpecialOffer && <Sold />}
                    </li>
                ))}
            </ul>
        </div>

    )
}

export default ShoppingList