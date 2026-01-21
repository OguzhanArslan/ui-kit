import styles from './CompassAnimation.module.scss';

export interface ICompassAnimationProps {
  topLeftCoord?: string;
  topRightCoord?: string;
  bottomLeftCoord?: string;
  bottomRightCoord?: string;
}

export const CompassAnimation = ({
  topLeftCoord = '41.0082° N',
  topRightCoord = '28.9784° E',
  bottomLeftCoord = 'LAT 41.0082',
  bottomRightCoord = 'LNG 28.9784',
}: ICompassAnimationProps) => {
  return (
    <>
      {/* Grid Pattern */}
      <div className={styles.gridPattern} />

      {/* Crosshair */}
      <div className={styles.crosshair}>
        <div className={styles.crosshairH} />
        <div className={styles.crosshairV} />
      </div>

      {/* Koordinat Daireleri */}
      <div className={styles.coordinateCircles}>
        <div className={`${styles.circle} ${styles.circle1}`} />
        <div className={`${styles.circle} ${styles.circle2}`} />
        <div className={`${styles.circle} ${styles.circle3}`} />
        <div className={`${styles.circle} ${styles.circle4}`} />
      </div>

      {/* Pusula */}
      <div className={styles.compassContainer}>
        <div className={styles.compassOuter} />
        <div className={styles.directions}>
          <span className={`${styles.direction} ${styles.directionN}`}>N</span>
          <span className={`${styles.direction} ${styles.directionS}`}>S</span>
          <span className={`${styles.direction} ${styles.directionE}`}>E</span>
          <span className={`${styles.direction} ${styles.directionW}`}>W</span>
        </div>
        <div className={styles.needle}>
          <div className={styles.needleNorth} />
          <div className={styles.needleSouth} />
          <div className={styles.needleCenter} />
        </div>
      </div>

      {/* Köşe Koordinatları */}
      <span className={`${styles.coordinates} ${styles.coordTopLeft}`}>
        {topLeftCoord}
      </span>
      <span className={`${styles.coordinates} ${styles.coordTopRight}`}>
        {topRightCoord}
      </span>
      <span className={`${styles.coordinates} ${styles.coordBottomLeft}`}>
        {bottomLeftCoord}
      </span>
      <span className={`${styles.coordinates} ${styles.coordBottomRight}`}>
        {bottomRightCoord}
      </span>
    </>
  );
};
