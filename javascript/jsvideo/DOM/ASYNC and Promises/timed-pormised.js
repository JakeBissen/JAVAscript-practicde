


// const timedPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(`5 seconds later... ${new Date().getTime()}`);
//     }, 5000)
// });
// console.log(`now ${new Date().getTime()}`);

// timedPromise.then(value => console.log(value));
// // new Date().getTime() --- time stamp



///// --------- FETCHING -------- ////////


fetch('https://api.github.com/users/bitcoin/repos').then(data => data.json()).then(response => {
    let processedResponse = response.map(repo => ({
        name: repo.name,
        url: repo.url,
        forks: repo.forks
    }))
    console.log(processedResponse)
});


/// ------------- RENDER -------------- ////////

// let repoContainer = document.querySelector('.js-repo-container');

// fetch('https://api.github.com/users/bitcoin/repos').then(data => data.json()).then(response => {
//     let processedResponse = response
//         .map(repo => `
//             <li>
//             <a href = "${repo.url}" ${repo.name}</a> 
//             (forks: ${repo.forks})
//             </li>
//             name: repo.name,
//             url: repo.url,
//             forks: 
//             `)
//         .join(' ');
//     repoContainer.innerHTML = processedResponse;
// });







/// ----------- SUBMI FORM ---------///////

let repoContainer = document.querySelector
('.js-repo-container');
let repoInput = document.querySelector
('[name=repo-name]');
let form = document.querySelector('.js-repo-form');


function fetchRepo(repoName){
    fetch(`https://api.github.com/users/${repoName}/repos`).then(data => data.json()).then(response => {
    let processedResponse = '<ul>' + response
        .map(repo => `
                <li>
                    <a href = "${repo.url}" ${repo.name}</a> 
                    (forks: ${repo.forks})
                    </li>
                    name: repo.name,
                    url: repo.url,
                forks: 
            `)
        .join(' ') + '</ul>';
    repoContainer.innerHTML = processedResponse;
})
    .catch(err => {
        console.warn(err);
        repoContainer.innerHTML = `<p> Error fetching repo ${repoName}</p>`
    });
}

function formSubmitted(event){
    event.preventDefault();
    let repoName = (repoInput.value);
    fetchRepo(repoName);
}

form.addEventListener('submit', formSubmitted);
