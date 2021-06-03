import React from 'react';

import styles from './paint.module.scss'

interface PaintProps {
    color: string;
    height?: number;
    radius?: string;
}

export default function Paint({ color, height = 150, radius = `${String((height / 100) * 17.5)}px` }: PaintProps) {
    return (
        <div className={styles.paint} style={{ backgroundColor: color, height, borderRadius: `0 0 ${radius} 0` }} />
    )
}
