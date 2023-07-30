import ICharacter from '../models/ICharacter';
import CharacterCard from './CharacterCard';
import oops from '../assets/images/notFound.gif';

interface ICharactersListProps {
    characters: ICharacter[];
    setPopupActive: (state: boolean) => void;
    setPopupContentId: (id: number) => void;
}

const CharactersList = ({ characters, setPopupActive, setPopupContentId }: ICharactersListProps) => {
    return (
        <div className="characters">
            {characters ? (
                characters.map((character) => (
                    <CharacterCard
                        key={character.id}
                        id={character.id}
                        name={character.name}
                        status={character.status}
                        gender={character.gender}
                        image={character.image}
                        setPopupActive={setPopupActive}
                        setPopupContentId={setPopupContentId}
                    />
                ))
            ) : (
                <div className="characters__notFound">
                    <h1>Oops! Character not found!</h1>
                    <img src={oops} alt="Not found" />
                </div>
            )}
        </div>
    );
};

export default CharactersList;
