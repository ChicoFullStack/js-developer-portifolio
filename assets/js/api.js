
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
