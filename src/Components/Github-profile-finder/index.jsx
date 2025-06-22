import React, { useEffect, useState } from 'react';
import './styles-11.css'


const GithubProfileFinder = ({url}) => {
    const [userName, setUserName] = useState("Abayo-UI"); // Used for API call
    const [inputValue, setInputValue] = useState("Abayo-UI"); // Used for input field
    const [userDetails, setUserDetails] = useState({});

    async function profileFinder(url){
        try{
         const response = await fetch(`${url}/${userName}`);
         const data = await response.json();
         setUserDetails(data);
        } catch(e){
          console.log(e.message)
        }
    }

    useEffect( ()=> { profileFinder(url) }, [userName]);

    function handleSubmit(e){
        e.preventDefault();
        setUserName(inputValue); // This triggers the useEffect and API call
    }

  return (
    <div className="github-profile-finder-container">
      <h2>Github Profile Finder</h2>
      <form onSubmit={handleSubmit}>
      <div>
      <input
       type="text"
       placeholder="Enter your username"
       className="px-2 py-1 rounded-3"
       value={inputValue}
       onChange={e => setInputValue(e.target.value)}
       />
       <button className="btn btn-info ms-2" type="submit">Search</button>
       </div>
       </form>
       <div className="user-details mt-2  pt-1 pb-3 ps-2 col-lg-4 col-10 rounded-4 border border-solid border-dark">
    <div className="col-lg-4 col-5 h-75 me-2 border border-dark border-2 image-container">
        <img className="image" src={userDetails.avatar_url}/>
    </div>
    <div>
        <p> <strong>Name:</strong> {userDetails.name || userDetails.login} </p>
        <p> <strong>Followers:</strong> {userDetails.followers}</p>
        <p> <strong>Following:</strong> {userDetails.following}</p>
        <p> <strong>Repos:</strong> {userDetails.public_repos}</p>
        <p>
            {/* Location SVG */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{verticalAlign: 'middle', marginRight: '6px'}}><path d="M21 10.5c0 7.5-9 12-9 12s-9-4.5-9-12a9 9 0 1 1 18 0z"/><circle cx="12" cy="10.5" r="3.5"/></svg>
            {userDetails.location || "Not set"}
        </p>
        <p>
            {/* GitHub SVG */}
            <svg className="github" width="22" height="22" viewBox="0 0 24 24" fill="currentColor" style={{verticalAlign: 'middle', marginRight: '6px'}}><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2z"/></svg>
            <a  className="github" href={userDetails.html_url} target="_blank" rel="noopener noreferrer">GitHub Profile</a>
        </p>
    </div>
</div>
    </div>
  )
}

export default GithubProfileFinder