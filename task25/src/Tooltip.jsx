import React, { useState } from 'react';
import styles from './Tooltip.module.css';

export default function Tooltip({ text, children }) {
  const [visible, setVisible] = useState(false);

  const showTooltip = () => setVisible(true);
  const hideTooltip = () => setVisible(false);

  return (
    <div className={styles.tooltipContainer}
         onMouseEnter={showTooltip}
         onMouseLeave={hideTooltip}>
      {children}
      {visible && (
        <div className={styles.tooltip}>
          <div className={styles.tooltipArrow}></div>
          <div className={styles.tooltipText}>{text}</div>
        </div>
      )}
    </div>
  );
}
