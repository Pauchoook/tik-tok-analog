import axios from "axios";
import jwtDecode from "jwt-decode";

interface IDecoded {
  name: string;
  picture: string;
  sub: string;
}

export const createOrGetUser = async (response: any, addUser?: any) => {
  const decoded: IDecoded = jwtDecode(response.credential);

  const { name, picture, sub } = decoded;

  const user = {
    _id: sub,
    _type: "user",
    username: name,
    image: picture,
  };

  addUser(user);

  await axios.post(`${process.env.NEXT_PUBLIC_CLIENT_URL}/api/auth`, user);
};
