import React, { useRef, useEffect } from 'react';

function Card({ card, index, extraExpanded, toggleCard }) {
    const cardRef = useRef(null);

    useEffect(() => {
        cardRef.current.style.zIndex = extraExpanded ? 20 : index;
    }, [extraExpanded, index]);

    return (
        <div
            ref={cardRef}
            className={`card ${card.className} ${extraExpanded ? 'extra-expanded' : ''}`}
            onClick={() => toggleCard(card.id)}
        >
            <div className="card-content">{card.content}</div>
        </div>
    );
}

export default Card;
