export interface IDefaultPropsChildren {
  children: React.ReactNode;
}

export interface IPost {
  title: string;
  state: string;
  city: string;
  country: string;
  img: string;
  description: string;
  userId: number;
  name: string;
}

export interface ICreatePost {
  title: string;
  state: string;
  city: string;
  country: string;
  img: string;
  description: string;
  userId: number;
  name: string;
}

export interface ILoginForm {
  email: string;
  password: string;
}

export interface ILoginUser {
  email: string;
  name: string;
  img: string;
  following: number[] | [];
  id: number;
  password?: string;
  isAdm?: boolean;
}

export interface IRegisterData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  img: string;
}

export interface IPosts {
  name: string;
  title: string;
  state: string;
  city: string;
  country: string;
  img: string;
  description: string;
  userId: number;
  comments?: string;
  id: number;
}

export interface IComments {
  description: string;
}

export interface IUser {
  email: string;
  password?: string;
  name: string;
  img: string;
  isAdm: string;
  following: number[] | [];
  id: number;
}



export interface IUserContext {
  userLogin: ILoginUser | null;
  setUserLogin: React.Dispatch<React.SetStateAction<ILoginUser | null>>;
  functionLogin: (data: ILoginForm) => void;
  functionRegister: (data: IRegisterData) => void;
  lastPosts: IPosts[] | [];
  setLastPosts: React.Dispatch<React.SetStateAction<[] | IPosts[]>>;
  listLastPosts: () => Promise<void>;
  followersPost: [] | IPosts[];
  setFollowersPosts: React.Dispatch<React.SetStateAction<[] | IPosts[]>>;
  listFollowersPosts: (users: number[]) => Promise<void>;
  followingUsers: number[] | [];
  setFollowingUsers: React.Dispatch<React.SetStateAction<number[] | []>>;
  followUser(id: number): Promise<void>;
  userLogout: () => void;
}

export interface IPostContext {
  posts: ICreatePost[] | [];
  setPosts: React.Dispatch<React.SetStateAction<ICreatePost[]>>;
  functionPostRegister: (data: ICreatePost) => Promise<void>;
  setInfoUser: React.Dispatch<React.SetStateAction<string>>;
  infoUser: string;
  postId: number;
  setPostId: React.Dispatch<React.SetStateAction<number>>;
  renderPost(): Promise<void>;
  post: ICreatePost[] | [];
  setPost: React.Dispatch<React.SetStateAction<ICreatePost[]>>;
  userImage(): Promise<void>;
  image: string;
  submitComment(data: IComments): Promise<void>
}
