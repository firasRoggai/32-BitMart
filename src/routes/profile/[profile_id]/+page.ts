
export async function load({ fetch , params }) {
    const profileResponse = await fetch(`/api/profile/${params.profile_id}`);
    const profileData = await profileResponse.json();
    return profileData;
}