export const getAPIData = async (url) => {
    try {
        const res = await fetch(url);
        if(!res.ok) {
            console.error('Error!', res.status);
            return false;
        }

        return await res.json();
    } catch (error) {
        console.error('Error!', error.message);
        return false;
    }
}