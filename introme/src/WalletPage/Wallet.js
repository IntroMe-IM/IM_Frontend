import React, { useState, useEffect } from 'react';
import Card from './Card';
import NavBar from '../Common/NavBar';
import axios from 'axios';
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
                const cards = response.data.map(card => ({
                    id: card.id,
                    content: `${card.name}\n${card.phoneNumber}\n${card.company}\n${card.email}`,
                    className: 'custom-card' // 필요한 경우 스타일을 변경
                }));
                setCardsData(cards);
                console.log("Fetched Cards Data:", cards); // 콘솔에 데이터 출력
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
                    <div
                        key={card.id}
                        style={{ '--index': index }} // CSS 변수로 index 전달
                        className={`card ${card.className} ${extraExpandedCard === card.id ? 'extra-expanded' : ''}`}
                        onClick={() => toggleCard(card.id)}
                    >
                        <div className="card-content">{card.content}</div>
                    </div>
                ))}
            </div>
            <NavBar />
        </div>
    );
}

export default Wallet;
