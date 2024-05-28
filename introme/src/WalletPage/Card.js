import React, { useRef, useEffect } from 'react';

function Card({ card, index, expanded, expandCard }) {
    const cardRef = useRef(null);

    useEffect(() => {
        if (expanded) {
            cardRef.current.style.top = `${index * 60}px`;
        } else {
            cardRef.current.style.top = `${index * 60}px`;
        }
    }, [expanded, index]);

    return (
        <div
            ref={cardRef}
            className={`card ${card.className} ${expanded ? 'expanded' : ''}`}
            onClick={() => expandCard(card.id)}
        >
            <div className="card-content">{card.content}</div>
        </div>
    );
}

export default Card;
