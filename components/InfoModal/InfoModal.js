import React from 'react';
import styles from './InfoModal.module.css';

const InfoModal = ({ content, setShowModal }) => {
  const handleClick = () => {
    setShowModal({
      'layer': null,
      'display': false,
    })
  }
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <span class={styles.close} onClick={() => handleClick()}>&times;</span>
        <span dangerouslySetInnerHTML={{__html: content}} />
      </div>
    </div>
  );
};

export default InfoModal;
