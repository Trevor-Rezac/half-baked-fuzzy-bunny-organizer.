import { 
    createBunny, 
    getFamilies, 
    checkAuth, 
    logout 
} from '../fetch-utils.js';

const form = document.querySelector('.bunny-form');
const logoutButton = document.getElementById('logout');

form.addEventListener('submit', async e => {
    // prevent default
    e.preventDefault();
    // get the name and family id from the form
    const data = new FormData(form);
    const bunny = data.get('bunny-name');
    const family = data.get('family-id');
    // console.log(family);

    // use createBunny to create a bunny with this name and family id
    await createBunny({
        name: bunny,
        family_id: family,
    });

    form.reset();

    window.location.href = '../families';
});

window.addEventListener('load', async() => {
    // let's dynamically fill in the families dropdown from supabase
    // grab the select HTML element from the DOM
    const familyDropdown = document.querySelector('select');

    // go get the families from supabase
    const families = await getFamilies();
    // console.log(families);

    // for each family
    for (let family of families) {
        // create an option tag
        const familyEl = document.createElement('option');
        // set the option's value and text content
        familyEl.value = family.id;
        familyEl.text = family.name;
        // and append the option to the select
        familyDropdown.append(familyEl);
    }

});


checkAuth();

logoutButton.addEventListener('click', () => {
    logout();
});
