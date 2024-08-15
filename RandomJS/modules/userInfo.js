const userInfo = {
    "name": "ABC",
    "lastname": "XYZ",
    "age": 15
}; // At the beginning we have to declare variable

export const getFullInfoPretty = () => {
    return `${userInfo.name} ${userInfo.lastname} has age ${userInfo.age}`;
}

export default userInfo; // then we can export it