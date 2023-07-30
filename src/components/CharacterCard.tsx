interface ICharacterCardProps {
    id: number;
    name: string;
    status: string;
    gender: string;
    image: string;
    setPopupActive: (state: boolean) => void;
    setPopupContentId: (id: number) => void;
}

const CharacterCard = ({ id, name, status, gender, image, setPopupActive, setPopupContentId }: ICharacterCardProps) => {
    const showButtonHandler = () => {
        setPopupActive(true);
        setPopupContentId(id);
    };

    return (
        <div className="cardWrapper">
            <div className="cardWrapper__photo">
                <img src={image} alt="Character avatar" />
            </div>
            <div className="cardWrapper__info">
                <div className="cardWrapper__characterName">{name}</div>
                <div className="cardWrapper__characterStatus">
                    <table>
                        <tbody>
                            <tr>
                                <td>Status:</td>
                                <td>{status}</td>
                            </tr>
                            <tr>
                                <td>Gender:</td>
                                <td>{gender}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="cardWrapper__characterGender"></div>
            </div>
            <button className="cardWrapper__detailsButton" onClick={showButtonHandler}>
                Show more
            </button>
        </div>
    );
};

export default CharacterCard;
