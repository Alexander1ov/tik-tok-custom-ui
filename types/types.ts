export interface VideoPosts {
  aweme_id: string;
  video_id: string;
  region: string;
  title: string;
  cover: string;
  origin_cover: string;
  duration: number;
  play: string;
  wmplay: string;
  music: string;
  music_info: {
    id: string;
    title: string;
    play: string;
    cover: string;
    author: string;
    original: boolean;
    duration: number;
    album: string;
  };
  play_count: number;
  digg_count: number;
  comment_count: number;
  share_count: number;
  download_count: number;
  create_time: number;
  anchors: string | null;
  anchors_extras: string;
  is_ad: boolean;
  commerce_info: {
    adv_promotable: boolean;
    auction_ad_invited: boolean;
    branded_content_type: number;
    study_id?: string;
    with_comment_filter_words: boolean;
  };
  commercial_video_info: string;
  author: {
    id: string;
    unique_id: string;
    nickname: string;
    avatar: string;
  };
  is_top: number;
}
export interface UserInfo {
  stats: {
    diggCount: number;
    followerCount: number;
    followingCount: number;
    heart: number;
    heartCount: number;
    videoCount: number;
  };
  user: {
    avatarMedium: string;
    id: string;
    ins_id: string;
    nickname: string;
    signature: string;
    uniqueId: string;
    youtube_channel_id: string;
    youtube_channel_title: string;
    privateAccount: boolean;
    openFavorite: boolean;
  };
}
export interface Comment {
  id: number;
  text: string;
  create_time: number;
  digg_count: number;
  reply_total: number;
  user: { unique_id: string; nickname: string; avatar: string };
  status: number;
}

export interface Feed {
  code: number;
  data: Array<VideoPosts>;
  msg: string;
  processed_time: number;
}

export interface Search extends Omit<Feed, "data"> {
  data: { cursor: number; hasMore: boolean; videos: Array<VideoPosts> };
}

export interface UserData extends Omit<Feed, "data"> {
  data: UserInfo;
}

export interface UserVideo extends Omit<Feed, "data"> {
  data: {
    cursor: string;
    hasMore: boolean;
    videos: Array<VideoPosts>;
  };
}

export interface VideoOrigin extends Omit<Feed, "data"> {
  data: VideoPosts;
}

export interface CommentsFetch extends Omit<Feed, "data"> {
  data: {
    total: number;
    cursor: string;
    hasMore: boolean;
    comments: Array<Comment>;
  };
}
