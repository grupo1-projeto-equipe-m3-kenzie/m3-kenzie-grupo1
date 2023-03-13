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
  id?: string | number;
  comments?: IComments | any;
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
  following?: number[] | []; //colocar interrogação
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
  description?: string;
  name?: string;
  img?: string;
  // push?: any;
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
  followersPosts: [] | IPosts[];
  setFollowersPosts: React.Dispatch<React.SetStateAction<[] | IPosts[]>>;
  listFollowersPosts: () => Promise<void>;
  followingUsers: number[] | [];
  setFollowingUsers: React.Dispatch<React.SetStateAction<number[] | []>>;
  followUnfollowUser(id: number, name: string): Promise<void>;
  followUser(id: number, name: string): Promise<void>;
  unfollowUser(isFollowing: number, name: string): Promise<void>;
  userLogout: () => void;
}

export interface IPostContext {
  posts: ICreatePost[] | [];
  setPosts: React.Dispatch<React.SetStateAction<ICreatePost[]>>;
  functionPostRegister: (data: ICreatePost) => Promise<void>;
  setInfoUser: React.Dispatch<React.SetStateAction<string>>;
  infoUser: string;
  postId: string | null;
  setPostId: React.Dispatch<React.SetStateAction<string | null>>;
  renderPost(): Promise<void>;
  post: ICreatePost[] | [];
  setPost: React.Dispatch<React.SetStateAction<ICreatePost[]>>;
  userImage(): Promise<void>;
  image: string;
  submitComment(data: IComments): Promise<void>;
  getPostId(): Promise<void>;
  allComments: IPost;
  setAllComments: React.Dispatch<React.SetStateAction<IPost>>;
  getUser(): Promise<void>;
  userFollowing: number[];
  setUserFollowing: React.Dispatch<React.SetStateAction<number[]>>;
  userFollowPost: boolean;
  setUserFollowPost: React.Dispatch<React.SetStateAction<boolean>>;
  checkUserFollow(data: number[] | []): void;
  followId: number;
  followUser(postFollowId: number, userFollowId: number[]): Promise<void>;
  postOwnerId: number;
  setPostOwnerId: React.Dispatch<React.SetStateAction<number>>;
  unfollowUser(postFollowId: number, userFollowId: number[]): Promise<void>;
  logOut(): void;
}
