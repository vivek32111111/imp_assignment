import React, { useState, useEffect } from 'react';
import './App.css';

const Github = () => {
    const [data, setData] = useState([]);
    const [inputText, setInputText] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [bio, setBio] = useState('');
    const [followers, setFollowers] = useState(0);
    const [following, setFollowing] = useState(0);

    const enteredText = (e) => {
        setInputText(e.target.value);
    }

    const fetchData = () => {
        const callType = {
            method: "GET"
        };
        fetch(`https://api.github.com/users/${inputText}`, callType)
            .then(res => res.json())
            .then(dataResponse => {
                setData(dataResponse);
                setImageUrl(dataResponse.avatar_url);
                setUsername(dataResponse.login);
                setName(dataResponse.name);
                setBio(dataResponse.bio);
                setFollowers(dataResponse.followers);
                setFollowing(dataResponse.following)
            });
    };

    useEffect(() => {
        fetchData();
        // showImage()
    }, []);

    console.log("Data");
    console.log(data);

    return (
        <div className="main-container">
            <div className="search-container">
                <input
                    type="text"
                    name="Username"
                    id="input"
                    className="input"
                    placeholder="Your Git Username.."
                    onChange={enteredText}
                />
                <button id="search" className="search" onClick={fetchData}>Search</button>
            </div>

            <div className="profile">
                <div className="img-name">
                    <img
                        src={!imageUrl ? "" : imageUrl}
                        alt=""
                        id="img"
                        className="img"
                    /><br />
                    <span>{!name ? "" : name}</span><br/>
                    <span className="name" id="name">{!username ? "" : `@${username}`}</span><br />
                    <a className="username" id="username"></a>
                </div>
                <div className="bio" id="bio">{!bio ? "" : bio}</div>
                <div className="other">
                    <a id="flwrs-link"><span id="followers">{!followers ? "0" : followers }</span>followers</a>
                    <a id="flwin-link"><span id="following">{!following ? "0" : following}</span>following</a>
                </div>
            </div>
        </div>
    );
}

export default Github;



