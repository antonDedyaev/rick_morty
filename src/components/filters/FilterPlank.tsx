import { ReactNode, useEffect, useRef, useState } from 'react';
import { useAppSelector } from '../../hooks/redux';

interface IFilterPlankProps {
    title: 'name' | 'status' | 'species' | 'type' | 'gender';
    children: ReactNode;
}

const FilterPlank = ({ title, children }: IFilterPlankProps) => {
    const [isDropdownShown, setIsDropdownShown] = useState(false);
    const [subTitle, setSubTitle] = useState('');

    const filters = useAppSelector((state) => state.filters);
    useEffect(() => {
        setSubTitle(filters[title]);
    }, [filters]);

    const domNode = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const checkClickedTarget = (e: MouseEvent) => {
            const target = e.target as HTMLDivElement;
            if (target.closest('.plankWrapper_isActive')) {
                return;
            }
            if (!domNode.current!.contains(target)) {
                setIsDropdownShown(false);
            }
        };
        document.addEventListener('mousedown', checkClickedTarget);

        return () => document.removeEventListener('mousedown', checkClickedTarget);
    });

    return (
        <div
            className={isDropdownShown ? 'plankWrapper plankWrapper_isActive' : 'plankWrapper'}
            onClick={() => setIsDropdownShown(!isDropdownShown)}
        >
            <div className="plankWrapper__content">
                <div className="plankWrapper__textContent">
                    <div className="plankWrapper__filterTitle">{title}</div>
                    {subTitle !== '' && <div className="plankWrapper__filterSubtitle">{subTitle}</div>}
                </div>
            </div>
            <div className="plankWrapper__dropdown" ref={domNode}>
                <div className="plankWrapper__dropdownContent" onClick={(e) => e.stopPropagation()}>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default FilterPlank;
