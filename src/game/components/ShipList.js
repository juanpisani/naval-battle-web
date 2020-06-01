import React from "react";
import {LABELS_OF_SHIP} from "../consts/ClassOfShip";
import Ship from "../components/Ship";

const ShipList = ({ ships }) => {
    const categories = ships.reduce((res, item) => {
        if (!res[item.length]) {
            res[item.length] = {
                type: LABELS_OF_SHIP[item.length],
                ships: []
            };
        }

        res[item.length].ships.push(item);

        return res;
    }, {});

    return (
        <div className="ship-list">
            {Object.values(categories).map((category) => (
                <div key={`ship-row-${category.type}`} className="ship-list__row">
                    <div className="ship-list__row__label">{category.type}</div>
                    {category.ships.map((ship) => (
                        <Ship key={`ship-${ship.id}`} ship={ship} />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default ShipList;
