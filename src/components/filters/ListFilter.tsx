import { useAppDispatch } from '../../hooks/redux';
import { genderFilterAdded, statusFilterAdded } from '../../store/slices/filtersSlice';

const ListFilter = ({ list }: { list: string }) => {
    const listValues = list === 'status' ? ['alive', 'dead', 'unknown'] : ['female', 'male', 'genderless', 'unknown'];

    const dispatch = useAppDispatch();
    const listItemSelectHandler = () => {
        const parent = document.querySelector(`.${list}`);
        const selectedItem = parent && (parent.querySelector('input[type="radio"]:checked') as HTMLInputElement);

        if (selectedItem) {
            switch (list) {
                case 'status':
                    dispatch(statusFilterAdded(selectedItem.value));
                    break;
                case 'gender':
                    dispatch(genderFilterAdded(selectedItem.value));
                    break;
            }
        }
    };
    return (
        <div className={`listFilterWrapper ${list}`}>
            {listValues.map((item, index) => (
                <div className="listFilterWrapper__listItem" key={index} onClick={listItemSelectHandler}>
                    <input type="radio" id={item} name={list} value={item} />
                    <label htmlFor={item}>{item}</label>
                </div>
            ))}
        </div>
    );
};

export default ListFilter;
