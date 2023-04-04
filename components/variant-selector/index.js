import React from 'react';

const VariantSelect = ({value, options, onSelect, category}) => (
    <select value={value} onChange={e => onSelect(e.target.value)} id={category}>
        {options.map(opt => (
            <option key={opt} value={opt}>{opt}</option>
        ))}
    </select>
);

export default VariantSelect;