import React, {FC, useState} from 'react';
import './index.less';

interface ItemType {
    label: string;
    value: string;
}
interface ButtonProps {
    defaultValue?: string;
    data: any;
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select: FC<ButtonProps> = (props) => {
    const {onChange, data, defaultValue = ''} = props;
    const [selectedValue, setSelectedValue] = useState<string>(defaultValue);

    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        if (onChange) {
            onChange(event);
            setSelectedValue(event.target.value);
        }
    };

    return (
        <div>
            <select className='select-root' value={selectedValue} onChange={handleChange}>
                {data.map((item: ItemType) => (
                    <option key={item.label} value={item.value}>
                        {item.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Select;
