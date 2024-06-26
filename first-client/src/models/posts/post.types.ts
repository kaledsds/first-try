import { BaseModel } from "../../common/common.types";
import { UserModel } from "../user/user.types";

/**
 * Post model
 */
export interface PostModel extends BaseModel {
  title: string;
  content: string;
  author: UserModel;
}
