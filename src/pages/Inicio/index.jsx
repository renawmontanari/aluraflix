
import Banner from '@/componentes/Banner';
import Secao from '@/componentes/Secao';
import { useEffect, useState } from 'react';

function Inicio() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('https://668c6b2b0b61b8d23b0d4f6f.mockapi.io/cards')
      .then(resposta => resposta.json())
      .then(dados => {
        setCards(dados || [])
      })
      .catch(error => console.error('Erro ao buscar os dados:', error));
  }, []);

  if (cards === null) {
    return <div>Carregando...</div>;
  }

  const frontendCards = cards.filter(card => card.categoria === 'frontend');
  const backendCards = cards.filter(card => card.categoria === 'backend');
  const mobileCards = cards.filter(card => card.categoria === 'mobile');

  const excluindoCardAgora = (id) => {
    const novoscards = cards.filter(card => card.id !== id);
    setCards(novoscards);
  }

  return (
    <>
      <Banner /> 

      {frontendCards.length > 0 && (
        <Secao 
          cards={frontendCards} 
          categoria="Frontend" 
          excluindo={excluindoCardAgora} 
        />
      )}
      
      {backendCards.length > 0 && (
        <Secao 
          cards={backendCards} 
          categoria="Backend" 
          excluindo={excluindoCardAgora} 
        />
      )}
      
      {mobileCards.length > 0 && (
        <Secao 
          cards={mobileCards} 
          categoria="Mobile" 
          excluindo={excluindoCardAgora} 
        />
      )}

    </>
  )
}

export default Inicio;
