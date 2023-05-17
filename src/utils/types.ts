export interface IVideo {
  _id: string;
  userId: string;
  caption: string;
  video: {
    asset: {
      _id: string;
      url: string;
    };
  };
  postedBy: {
    _id: string;
    username: string;
    image: string;
  };
  likes: ILike[];
  comments: IComment[];
}

export interface ILike {
  _key: string;
  _ref: string;
}

export interface IComment {
  comment: string;
  _key: string;
  postedBy: {
    _id: string;
    username: string;
    image: string;
    _ref: string;
  };
}

export interface IUser {
  _id: string;
  _type: string;
  username: string;
  image: string;
}

export interface IParams {
  params: {
    id: string;
  }
}