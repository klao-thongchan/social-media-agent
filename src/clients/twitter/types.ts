import { EUploadMimeType, TwitterApi } from "twitter-api-v2";

/**
 * Interface for creating a new Tweet request
 */
export interface CreateTweetRequest {
  /**
   * Text of the Tweet being created.
   */
  text: string;

  /**
   * Media to be attached to the Tweet.
   */
  media?: CreateMediaRequest;

  /**
   * Link to the Tweet being quoted
   */
  quoteTweetId?: string;
}

/**
 * Interface for creating a new media request
 */
export interface CreateMediaRequest {
  /**
   * The base64-encoded file content being uploaded.
   */
  media: Buffer;
  /**
   * The type of media being uploaded.
   */
  mimeType: EUploadMimeType | string;
  /**
   * A list of user IDs to set as additional owners allowed to use the returned mediaId in Tweets or Cards.
   * Maximum of 100 additional owners may be specified
   */
  additionalOwners?: string[];
}

/**
 * Interface for authorizing a user to use the Twitter API
 */
export type AuthorizeUserResponse =
  | {
      /**
       * The Bearer token used to authenticate requests with the Twitter API
       */
      token: string;
      /**
       * The URL to visit to authorize the user
       */
      authorizationUrl?: never;
    }
  | {
      /**
       * The Bearer token used to authenticate requests with the Twitter API
       */
      token?: never;
      /**
       * The URL to visit to authorize the user
       */
      authorizationUrl: string;
    };

export interface TwitterClientArgs {
  twitterClient: TwitterApi;
}
