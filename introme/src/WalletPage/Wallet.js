import React, { useState, useEffect } from 'react';
import NavBar from '../Common/NavBar';
import axios from 'axios';
import Card from './Card';
import './Wallet.css';

function Wallet() {
    const [cardsData, setCardsData] = useState([]);
    const [extraExpandedCard, setExtraExpandedCard] = useState(null);

    useEffect(() => {
        const fetchCards = async () => {
            const member = JSON.parse(localStorage.getItem('member'));
            const memberId = member?.id;

            if (!memberId) {
                console.error("Member ID not found");
                return;
            }

            try {
                const response = await axios.get(`https://introme.co.kr/v1/card/shared-cards/${memberId}`);
                const cards = response.data.map((card, index) => ({
                    id: card.id,
                    name: card.name,
                    phoneNumber: card.phoneNumber,
                    company: card.company,
                    email: card.email,
                    description: card.description,
                    color: card.color || '#000000' // color가 null이면 검정색 사용
                }));
                setCardsData(cards);
                // console.log("Fetched Cards Data:", cards); // 콘솔에 데이터 출력
            } catch (error) {
                console.error("Error fetching cards:", error);
            }
        };

        fetchCards();
    }, []);

    const toggleCard = (cardId) => {
        setExtraExpandedCard(extraExpandedCard === cardId ? null : cardId);
    };

    return (
        <div className="main">
            <div className="wallet">
                {cardsData.map((card, index) => (
                    <Card
                        key={card.id}
                        card={card}
                        index={index}
                        extraExpanded={extraExpandedCard === card.id}
                        toggleCard={toggleCard}
                    />
                ))}
            </div>
            <NavBar />
        </div>
    );
}

export default Wallet;
