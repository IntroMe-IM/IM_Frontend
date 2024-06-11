import React, { useState, useEffect } from 'react';
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
                const colors = ['#FF6347', '#4682B4', '#32CD32', '#FFD700', '#6A5ACD', '#FF69B4', '#8A2BE2'];
                const cards = response.data.map((card, index) => ({
                    id: card.id,
                    name: card.name,
                    phoneNumber: card.phoneNumber,
                    company: card.company,
                    email: card.email,
                    color: colors[index % colors.length]
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
                        style={{ '--index': index, backgroundColor: card.color }} // CSS 변수로 index 및 색상 전달
                        className={`card ${extraExpandedCard === card.id ? 'extra-expanded' : ''}`}
                        onClick={() => toggleCard(card.id)}
                    >
                        <div className="card-content">
                            <div>{card.name}</div>
                            <strong>{card.company}</strong>
                            <div>Phone: {card.phoneNumber}</div>
                            <div>Email: {card.email}</div>
                            <div>Fax: 02.0000.0000</div>
                        </div>
                    </div>
                ))}
            </div>
            <NavBar />
        </div>
    );
}

export default Wallet;
