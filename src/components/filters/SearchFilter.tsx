import { useState } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { nameFilterAdded, speciesFilterAdded, typeFilterAdded } from '../../store/slices/filtersSlice';
import clearIcon from '../../assets/images/clear.svg';

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
            <div
                className={
                    inputValue.length !== 0
                        ? 'searchFilterWrapper__clearButton searchFilterWrapper__clearButton_active'
                        : 'searchFilterWrapper__clearButton'
                }
                onClick={() => setInputValue('')}
            >
                <img src={clearIcon} alt="" />
            </div>
        </div>
    );
};

export default SearchFilter;
