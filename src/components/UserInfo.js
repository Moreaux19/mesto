class UserInfo {
  constructor({ profileNameSelector, profileDescriptionSelector }) {
    this._profileName = document.querySelector(profileNameSelector);
    this._profileDescription = document.querySelector(profileDescriptionSelector);
  }

  getUserInfo() {
    return {
      name: this._name,
      about: this._about,
      id: this._id
    };
  }

  setUserInfo({ name, about, _id }) {
    this._name = name;
    this._about = about;
    this._id = _id;
    this._profileName.textContent = name;
    this._profileDescription.textContent = about;
  }
}

export default UserInfo;
