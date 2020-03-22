import React from 'react';
import PropTypes from 'prop-types';
import style from './CharacterCard.module.scss'

const CharacterCard = ({ children }) => (
  <div className={style["id-card-wrapper"]}>
    <div className={style["id-card"]}>{children}</div>
  </div>
);

CharacterCard.propTypes = {
  children: PropTypes.element.isRequired,
};

export default CharacterCard;