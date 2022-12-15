const { cloudimage } = require("../config/cloudinary");
const { generateUUID } = require("../utils/functions");

exports.uploadAvatar = async (avatar) => {
  const avatarUUID = generateUUID();
  try {
    const uploadedAvatar = await cloudimage.v2.uploader.upload(avatar, {
      public_id: "bo_ua_" + avatarUUID,
      folder: "/avatars",
    });
    return uploadedAvatar.secure_url;
  } catch {
    throw 400;
  }
};
