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
  postedBy: {
    _id: string;
    username: string;
    image: string;
  };
}

export interface IComment {
  comment: string;
  _key: string;
  postedBy: {
    _ref: string;
  };
}

export interface IUser {
  _id: string;
  _type: string;
  username: string;
  image: string;
}
