import React from "react";

const ProfileViewController = () => {
  const [name, setName] = React.useState<string>("");
  const [pix, setPix] = React.useState<string>("");
  const [bank, setBank] = React.useState<string>("");
  const [image, setImage] = React.useState<string>("");
  const [editing, setEditing] = React.useState<boolean>(false);

  const loadUserData = (): void => {
    changeName("Anderson Vanzo");
    changePix("101.807.769-32");
    changeBank("Bradesco");
    setImage("https://beta.ctvnews.ca/content/dam/ctvnews/images/2019/11/18/1_4691731.png?cache_timestamp=1574134871525");
  };

  const changeName = (text: string): void => {
    setName(text);
  };

  const changePix = (text: string): void => {
    setPix(text);
  };

  const changeBank = (text: string): void => {
    setBank(text);
  };

  const changeImage = (text: string): void => {
    setImage(text);
  };

  const toggleEditing = (): void => {
    setEditing(!editing);
  };

  return {
    name,
    pix,
    bank,
    image,
    editing,

    loadUserData,
    changeName,
    changePix,
    changeBank,
    toggleEditing,
  };
};

export default ProfileViewController;
