import { useState } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { nameFilterAdded, speciesFilterAdded, typeFilterAdded } from '../../store/slices/filtersSlice';

const SearchFilter = ({ type }: { type: string }) => {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useAppDispatch();

    const handleEnterPressed = ({ target, key }: KeyboardEvent): void => {
        const searchInput = target as HTMLInputElement;

        if (key === 'Enter') {
            switch (type) {
                case 'name':
                    dispatch(nameFilterAdded(searchInput.value));
                    setInputValue('');
                    break;
                case 'species':
                    dispatch(speciesFilterAdded(searchInput.value));
                    setInputValue('');
                    break;
                case 'type':
                    dispatch(typeFilterAdded(searchInput.value));
                    setInputValue('');
                    break;
            }
        }
    };
    return (
        <div className="searchFilterWrapper" onKeyDown={handleEnterPressed as VoidFunction}>
            <input
                type="text"
                placeholder="Type to search..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
        </div>
    );
};

export default SearchFilter;
