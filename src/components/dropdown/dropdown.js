import React from 'react';
import styles from './dropdown.module.css'
import { useState } from 'react';

function Dropdown ({selected, setSelected}){
    const [isActive, setActive] = useState(false)
    const options = ["Futbol 11", "Futbol Sala","Basquetbol","Voleibol","Tenis"]
    return (
        <div className={styles.dropdown}>
            <div className={styles.dropdownBtn} onClick={(e) =>
                setActive(!isActive)}>
                {selected}
                <span className='fas fa-caret-down'></span>
            </div>
            {isActive && (
            <div className={styles.dropdownContent}>
                {options.map((option) => (
                    <div 
                        onClick={e => {
                            setSelected(option);
                            setActive(false);
                        }}
                        className={styles.dropdownItem}>  
                        {option}  
                    </div>
                ))}
            </div>
            )}
        </div>
    )
}

export default Dropdown;