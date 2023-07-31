import { useState } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { nameFilterAdded, speciesFilterAdded, typeFilterAdded } from '../../store/slices/filtersSlice';
import clearIcon from '../../assets/images/clear.svg';

const SearchFilter = ({ type }: { type: string }) => {
    const [inputValue, setInputValue] = useState('');
    const dispatch = useAppDispatch();

    const clearFilterHandler = () => {
        setInputValue('');
        const expandedDropdown = document.querySelector('.plankWrapper_isActive');
        expandedDropdown?.classList.remove('plankWrapper_isActive');
    };

    const handleEnterPressed = ({ target, key }: KeyboardEvent): void => {
        const searchInput = target as HTMLInputElement;

        if (key === 'Enter') {
            switch (type) {
                case 'name':
                    dispatch(nameFilterAdded(searchInput.value));
                    clearFilterHandler();
                    break;
                case 'species':
                    dispatch(speciesFilterAdded(searchInput.value));
                    clearFilterHandler();
                    break;
                case 'type':
                    dispatch(typeFilterAdded(searchInput.value));
                    clearFilterHandler();
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
                <img src={clearIcon} alt="Иконка с крестиком" />
            </div>
        </div>
    );
};

export default SearchFilter;
