import React from 'react';
import data from '../../data/logements.json';
import Hero from '../Hero';
import Card from '../card/Card';
import Container from '../container/Container';
import { Link } from 'react-router-dom';
function Home() {
  const logements = data.map(logement => {
    return (
      <Link
        key={logement.id}
        to={`/Logement/${logement.id}`}
        className="link-logement"
      >
        <Card key={logement.id} image={logement.cover} title={logement.title} />
      </Link>
    );
  });
  return (
    <Container>
      <Hero />
      <h1 className='titre-accueil'>Chez vous, partout et ailleurs</h1>
      <div className="cards">
        {logements}
      </div>
    </Container>
  );
}
export default Home;
