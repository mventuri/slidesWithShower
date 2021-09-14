Promise.all([
	fetch('https://www.baseUrl.com/wooTest/wp-json/wp/v2/pages/1691'),
	fetch('https://jsonplaceholder.typicode.com/posts/1'),
    fetch('https://api.github.com/users/username')
]).then(function (responses) {
	
	return Promise.all(responses.map(function (response) {
		return response.json();
	}));
}).then(function (data) {
	
    const slide1Title = data[0].title.rendered;
    const slide1Body = data[0].content.rendered;
    const slide2Title = data[1].title;
    const slide2Body = data[1].body;
    const slide2Signature = data[1].userId;
    const slide3PubRep = data[2].public_repos;
    const slide3WebSite = data[2].blog;
    const slide3GithubProfile = data[2].html_url;
    const date_now = new Date();
    
    document.getElementById("myName").innerHTML = slide1Title;
    document.getElementById("myPres").innerHTML = slide1Body;
    document.getElementById("quoteTitle").innerHTML = slide2Title;
    document.getElementById("quoteBody").innerHTML = slide2Body;
    document.getElementById("quoteSignature").innerHTML = slide2Signature;
    document.getElementById("public_repos_value").innerHTML = slide3PubRep;
    document.getElementById("website").innerHTML = slide3WebSite;
    document.getElementById("ghUrl").innerHTML = slide3GithubProfile;
    document.getElementById("last_update").innerHTML = date_now;
    console.log(slide3GithubProfile);
}).catch(function (error) {
	
	console.log(error);
});