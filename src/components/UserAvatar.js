class UserAvatar {
  constructor(avatarSelector) {
    this._avatarSelector = avatarSelector;
  }

  setAvatar(avatar) {
    this._avatar = avatar;
    this._avatarSelector.style.backgroundImage = `url(${this._avatar})`;
  }
}

export default UserAvatar;
