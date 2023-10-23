class UserInfo {
  constructor({ profileNameSelector, profileDescriptionSelector }, avatarSelector) {
    this._profileName = document.querySelector(profileNameSelector);
    this._profileDescription = document.querySelector(profileDescriptionSelector);
    this._avatarSelector = avatarSelector;
  }

  getUserInfo() {
    return {
      name: this._name,
      about: this._about,
      id: this._id
    };
  }

  setUserInfo({ name, about, avatar, _id }) {
    this._name = name;
    this._about = about;
    this._avatar = avatar;
    this._id = _id;
    this._profileName.textContent = name;
    this._profileDescription.textContent = about;
    this._avatarSelector.style.backgroundImage = `url(${this._avatar})`;
  }
}

export default UserInfo;
