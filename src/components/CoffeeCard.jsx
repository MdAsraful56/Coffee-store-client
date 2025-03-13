import React from 'react';

const CoffeeCard = ({coffee}) => {
    // console.log(coffee);

    const {name, chef, supplier, taste, category, details, photo} = coffee;

    return (
        <div>
            <div className="">
                <img src={photo} className='' alt="" />
            </div>
            <div className="">
                <div className="">
                    <h4 className="">{name}</h4>
                    <h4 className="">{chef}</h4>
                    <h4 className="">{supplier}</h4>
                    <h4 className="">{taste}</h4>
                </div>
                <div className="">
                    <button className="btn">1</button>
                    <button className="btn">2</button>
                    <button className="btn">3</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;