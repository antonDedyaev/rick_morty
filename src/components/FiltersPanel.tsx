import { ReactNode } from 'react';
import { useAppDispatch } from '../hooks/redux';
import { filtersRemoved } from '../store/slices/filtersSlice';

interface IFiltersPanelProps {
    isFiltered: boolean;
    children: ReactNode;
}

const FiltersPanel = ({ isFiltered, children }: IFiltersPanelProps) => {
    const dispatch = useAppDispatch();

    return (
        <div className="filtersWrapper">
            <h4>Filter by</h4>
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
