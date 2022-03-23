
const data = [
    {
        name: "Jone",
        age: 21,
        location: "londone",
        image: "https://randomuser.me/api/portraits/med/men/5.jpg"
    },
    {
        name: "Pate",
        age: 25,
        location: "Piter",
        image: "https://randomuser.me/api/portraits/med/men/60.jpg"
    },
    {
        name: "Anna",
        age: 31,
        location: "Bishkek",
        image: "https://randomuser.me/api/portraits/med/women/45.jpg"
    },
    {
        name: "Mary",
        age: 11,
        location: "Moscow",
        image: "https://randomuser.me/api/portraits/med/women/25.jpg"
    }
];

function profileIterator(profiles) {
    let nextIndex = 0;

    return {
        next: () => {
            return nextIndex < profiles.length
                ? {
                    value: profiles[nextIndex++],
                    done: false
                }
                : {
                    done: true
                };
        }
    }
}

const profiles = profileIterator(data);

nextProfile();

document.getElementById("next").addEventListener("click", nextProfile);

function nextProfile() {
    const currentProfile = profiles.next().value;

    if (currentProfile !== undefined) {
        document.getElementById("profile-display").innerHTML = `
            <ul class="list-group">
                <li class="list=group-item">
                    <h3>Name: ${currentProfile.name}</h3>
                    <p>Age: ${currentProfile.age}</p>
                    <p>Location: ${currentProfile.location}</p>
                </li>
            </ul>
        `;

        document.getElementById("image-display").innerHTML = `
            <img src="${currentProfile.image}" />
        `
    } else {
        window.location.reload(); // перезагружаем страницу
    }
}