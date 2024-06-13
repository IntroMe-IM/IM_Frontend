import React, { useRef, useEffect } from 'react';

function Card({ card, index, extraExpanded, toggleCard }) {
    const cardRef = useRef(null);

    useEffect(() => {
        cardRef.current.style.zIndex = extraExpanded ? 20 : index;
    }, [extraExpanded, index]);

    return (
        <div
            ref={cardRef}
            className={`card ${extraExpanded ? 'extra-expanded' : ''}`}
            style={{ backgroundColor: card.color }}
            onClick={() => toggleCard(card.id)}
        >
            <div className="card-content">
                <div>{card.name}</div>
                <strong>{card.company}</strong>
                <div>Phone: {card.phoneNumber}</div>
                <div>Email: {card.email}</div>
                <div>Description: {card.description}</div>
            </div>
        </div>
    );
}

export default Card;
