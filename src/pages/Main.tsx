import FiltersPanel from '../components/FiltersPanel';
import FilterPlank from '../components/filters/FilterPlank';
import SearchFilter from '../components/filters/SearchFilter';
import logo from '../assets/images/Rick-And-Morty-Logo.png';
import CharactersList from '../components/CharactersList';
import { useEffect, useState } from 'react';
import ICharacter from '../models/ICharacter';
import { useAppSelector } from '../hooks/redux';
import ListFilter from '../components/filters/ListFilter';
import Popup from '../components/Popup';
import CharacterInfo from '../components/CharacterInfo';

const Main = () => {
    const [characters, setCharacters] = useState<ICharacter[]>([]);
    const [isPopupActive, setPopupActive] = useState(false);
    const [popupContentId, setPopupContentId] = useState(0);
    const [currentPage, setCurrentPage] = useState<string | null>('https://rickandmortyapi.com/api/character');
    const [fetching, setFetching] = useState(true);
    const characterDetails = characters && characters.find((item) => item.id === popupContentId);

    const filters = useAppSelector((state) => state.filters);
    const filterValues = Object.values(filters).filter((item) => item !== '');

    const queryString = Object.entries(filters)
        .flatMap(([key, value]) => {
            if (value.length !== 0) {
                return `${key}=${value}`;
            } else {
                return [];
            }
        })
        .join('&');

    const scrollHandler = (e: any) => {
        if (!(e.target instanceof Document)) return;
        if (
            e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100 &&
            currentPage
        ) {
            setFetching(true);
        }
    };

    useEffect(() => {
        addEventListener('scroll', scrollHandler);

        return function () {
            removeEventListener('scroll', scrollHandler);
        };
    }, []);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const data = await fetch(`https://rickandmortyapi.com/api/character/?${queryString}`);
                const fetchedCharacters = await data.json();
                setCharacters(fetchedCharacters.results);
                setCurrentPage(fetchedCharacters.info.next);
            } catch (e) {
                console.log(e);
            } finally {
                setFetching(false);
            }
        };
        fetchCharacters();
    }, [filters]);

    useEffect(() => {
        if (fetching) {
            const fetchCharacters = async () => {
                try {
                    const data = await fetch(currentPage!);
                    const fetchedCharacters = await data.json();
                    setCharacters([...characters, ...fetchedCharacters.results]);
                    setCurrentPage(fetchedCharacters.info.next);
                } catch (e) {
                    console.log('All data has been fetched!');
                } finally {
                    setFetching(false);
                }
            };
            fetchCharacters();
        }
    }, [fetching]);
    return (
        <div className="container">
            <div className="container_inner">
                <img src={logo} alt="Rick and Morty Logo" />
                <h1>Get to know Rick and Morty characters</h1>
                <div className="container__charactersWrapper">
                    <FiltersPanel isFiltered={filterValues.length !== 0}>
                        <FilterPlank title="name">
                            <SearchFilter type="name" />
                        </FilterPlank>
                        <FilterPlank title="status">
                            <ListFilter list="status" />
                        </FilterPlank>
                        <FilterPlank title="species">
                            <SearchFilter type="species" />
                        </FilterPlank>
                        <FilterPlank title="type">
                            <SearchFilter type="type" />
                        </FilterPlank>
                        <FilterPlank title="gender">
                            <ListFilter list="gender" />
                        </FilterPlank>
                    </FiltersPanel>
                    <CharactersList
                        characters={characters}
                        setPopupActive={setPopupActive}
                        setPopupContentId={setPopupContentId}
                    />
                </div>
            </div>
            <Popup isActive={isPopupActive} setIsActive={setPopupActive}>
                {characterDetails && (
                    <CharacterInfo
                        image={characterDetails.image}
                        name={characterDetails.name}
                        status={characterDetails.status}
                        species={characterDetails.species}
                        gender={characterDetails.gender}
                        origin={characterDetails.origin.name}
                        location={characterDetails.location.name}
                    />
                )}
            </Popup>
        </div>
    );
};

export default Main;
