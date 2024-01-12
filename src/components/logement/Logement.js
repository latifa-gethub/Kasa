import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../../data/logements.json';
import Carrousel from './carroussel/Carrousel';
import Infologement from './infoLogement/InfoLogement';
import TitleLocation from './titleLocation/TitleLocation';
import Tags from './tags/Tags';
import Itemcollapse from '../apropos/Itemcollapse';
import { Host } from './host/Host';
import { Rating } from './rating/Rating';
import Erreur from '../page-erreur/Erreur';

function Logement() {
  const params = useParams();
  
  const idLogement = params.id;

  //recuperer le objet par rapport à id
  const logementClicker = data.find(logement => logement.id === idLogement);
 
  if (logementClicker === undefined) {
    return <Erreur />;
  }

  const host = logementClicker.host;
  const nameHost = Object.values(host)[0];
  const pictureHost = Object.values(host)[1];
  return (
    <div className="container-wrapper">
      <Carrousel pictures={logementClicker.pictures} />
      <Infologement>
        <div className="info-logement">
          <div className="title-tags">
            <TitleLocation
              title={logementClicker.title}
              location={logementClicker.location}
            />
            <Tags tags={logementClicker.tags} />
          </div>
          <div className="host-rating">
            <Host nameHost={nameHost} pictureHost={pictureHost} />
            <Rating rating={logementClicker.rating} />
          </div>
        </div>
        <div className="collapses-legement">
          <Itemcollapse key="description"
            category="Description"
            text={logementClicker.description}
          />
          <Itemcollapse key="equipements"
            category="Équipements"
            text={logementClicker.equipments.map(equipement =>
              <p key={equipement}>
                {equipement}
              </p>
            )}
          />
        </div>
      </Infologement>
    </div>
  );
}

export default Logement;
