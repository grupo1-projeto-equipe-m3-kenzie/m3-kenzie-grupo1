export interface IDefaultPropsChildren {
  children: React.ReactNode;
}

export interface ICreatePost {
  title: string;
  state: string;
  city: string;
  country: string;
  img: string;
  description: string;
  userId: number;
}

export interface ILoginForm {
  email: string;
  password: string;
}

// export interface IValueProps {
//   functionLogin: (data: ILoginForm) => void;
//   functionRegister: (data: iRegisterData) => void;
// }

export interface ILoginUser {
  id: string;
  name: string;
  email: string;
}

export interface IRegisterData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  img: string;
}

// export interface IValueProps {
//   userLogin: ILoginUser | null;
//   setUserLogin: React.Dispatch<React.SetStateAction<ILoginUser>>;
//   functionLogin: (data: ILoginForm) => void;
//   functionRegister: (data: IRegisterData) => void;
//   posts: ICreatePost[] | [];
//   setPosts: React.Dispatch<React.SetStateAction<ICreatePost[]>>;
//   functionPostRegister: (data: ICreatePost) => Promise<void>;
// }

export interface IPosts {
  name: string;
  title: string;
  state: string;
  city: string;
  country: string;
  img: string;
  description: string;
  userId: number;
  comments: string;
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
  setUserLogin: React.Dispatch<React.SetStateAction<ILoginUser>>;
  functionLogin: (data: ILoginForm) => void;
  functionRegister: (data: IRegisterData) => void;
}

export interface IPostContext {
  posts: ICreatePost[] | [];
  setPosts: React.Dispatch<React.SetStateAction<ICreatePost[]>>;
  functionPostRegister: (data: ICreatePost) => Promise<void>;
}

export interface IDashboardContext {
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
  getUser: () => Promise<void>;
  followingUsers: [] | IPosts[];
  setFollowingUsers: React.Dispatch<React.SetStateAction<[] | IPosts[]>>;
  getFollowing: (user: []) => Promise<void>;
  newPosts: IPosts[] | [];
  setNewPosts: React.Dispatch<React.SetStateAction<[] | IPosts[]>>;
  listNewPosts: () => Promise<void>;
  viewPost: (id: number) => void;
}
