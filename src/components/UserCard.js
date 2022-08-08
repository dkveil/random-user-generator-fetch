import styled from "styled-components";

const UserCardWrapper = styled.div`
    display: flex;
    position: relative;
    align-items: center;
    flex-direction: column;
    padding: 1rem;
    height: 480px;
    width: 280px;
    margin: 1rem;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
    border-radius: 4px;
`;

const Banner = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 125px;
    width: 100%;
    background: ${(props) => (props.male ? "#00CCFF" : "pink")};
`;

const Avatar = styled.img`
    position: relative;
    height: 150px;
    width: 150px;
    border-radius: 150px;
    border: 3px solid white;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    z-index: 1;
`;

const ProfileName = styled.h3`
    font-size: 1.1rem;
`;

const ProfileDescriptionWrapper = styled.div`
    font-size: .8rem;
    line-height: 1;
`;

const ProfileDescript = styled.p`
    text-align: left;
    span {
        font-weight: bold;
    }
`;

const UserCard = (props) => {
    const {
        nametitle,
        firstname,
        lastname,
        gender,
        email,
        age,
        imageurl,
        phonenumber,
        country,
    } = props;

    return (
        <UserCardWrapper>
            <Banner male={gender === "male" ? true : false}></Banner>
            <Avatar src={imageurl} alt={lastname} />
            <ProfileName>
                {nametitle} {firstname} {lastname}
            </ProfileName>
            <ProfileDescriptionWrapper>
                <ProfileDescript>
                    <span>Age: </span>
                    {age}
                </ProfileDescript>
                <ProfileDescript>
                    <span>E-mail: </span>
                    {email}
                </ProfileDescript>
                <ProfileDescript>
                    <span>Phone number: </span>
                    {phonenumber}
                </ProfileDescript>
                <ProfileDescript>
                    <span>Country: </span>
                    {country}
                </ProfileDescript>
            </ProfileDescriptionWrapper>
        </UserCardWrapper>
    );
};

export default UserCard;
