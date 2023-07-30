interface ICharacterInfoProps {
    image: string;
    name: string;
    status: string;
    species: string;
    gender: string;
    origin: string;
    location: string;
}

const CharacterInfo = ({ image, name, status, species, gender, origin, location }: ICharacterInfoProps) => {
    return (
        <div className="characterInfoWrapper">
            <div className="characterInfoWrapper__photo">
                <img src={image} alt="" />
            </div>
            <div className="characterInfoWrapper__info">
                <h1 className="characterInfoWrapper__name">{name}</h1>
                <table className="characterInfoWrapper__details">
                    <tbody>
                        <tr>
                            <td>Status:</td>
                            <td>{status}</td>
                        </tr>
                        <tr>
                            <td>Species:</td>
                            <td>{species}</td>
                        </tr>
                        <tr>
                            <td>Gender:</td>
                            <td>{gender}</td>
                        </tr>
                        <tr>
                            <td>Origin:</td>
                            <td>{origin}</td>
                        </tr>
                        <tr>
                            <td>Location:</td>
                            <td>{location}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CharacterInfo;
