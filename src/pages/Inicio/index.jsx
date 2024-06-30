
import Banner from '@/componentes/Banner';
import Secao from '@/componentes/Secao';
import { useEffect, useState } from 'react';

function Inicio() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/cards')
      .then(resposta => resposta.json())
      .then(dados => {
        setCards(dados || [])
      })
      .catch(error => console.error('Erro ao buscar os dados:', error));
  }, []);

  if (cards === null) {
    return <div>Carregando...</div>; // Ou outra lógica de carregamento
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

      <Secao 
        cards={frontendCards} 
        categoria="Frontend" 
        excluindo={excluindoCardAgora} 
      />
      <Secao 
        cards={backendCards} 
        categoria="Backend" 
        excluindo={excluindoCardAgora} 
      />
      <Secao 
        cards={mobileCards} 
        categoria="Mobile" 
        excluindo={excluindoCardAgora} 
      />

    </>
  )
}

export default Inicio;
