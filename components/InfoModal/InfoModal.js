import React from 'react';
import styles from './InfoModal.module.css';

const InfoModal = ({ content, display, setShowModal }) => {
  const handleClick = () => {
    setShowModal({
      'layer': null,
      'display': false,
    })
  }

  if (display) {
    return (
      <div className={styles.container}>
        <div className={styles.content}>
          <span class={styles.close} onClick={() => handleClick()}>&times;</span>
          <span dangerouslySetInnerHTML={{__html: content}} />
        </div>
      </div>
    );
  }
  return null;
};

export default InfoModal;
