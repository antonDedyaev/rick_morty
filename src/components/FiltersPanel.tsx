import { ReactNode, useState } from 'react';
import { useAppDispatch } from '../hooks/redux';
import { filtersRemoved } from '../store/slices/filtersSlice';

interface IFiltersPanelProps {
    isFiltered: boolean;
    children: ReactNode;
}

const FiltersPanel = ({ isFiltered, children }: IFiltersPanelProps) => {
    const dispatch = useAppDispatch();
    const [expandedHeader, setExpandedHeader] = useState(false);

    const expandFiltersHandler = () => {
        const wrapper = document.querySelector('.filtersWrapper');
        wrapper?.classList.toggle('filtersWrapper_expanded');
        wrapper?.classList.contains('filtersWrapper_expanded') ? setExpandedHeader(true) : setExpandedHeader(false);
    };

    return (
        <div className="filtersWrapper">
            <div className="filtersWrapper__header">
                <h4>Filter by</h4>
                <div className="filtersWrapper__spoiler" onClick={expandFiltersHandler}>
                    {expandedHeader ? 'Hide filters' : 'Show filters'}
                </div>
            </div>

            <div className="filtersWrapper__planksColumn">{children}</div>
            <button
                className={
                    isFiltered
                        ? 'filtersWrapper__removeFilters filtersWrapper__removeFilters_active'
                        : 'filtersWrapper__removeFilters'
                }
                onClick={() => dispatch(filtersRemoved())}
            >
                Clear filters
            </button>
        </div>
    );
};

export default FiltersPanel;
