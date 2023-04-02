export const getAPIData = async (url: string): Promise<any> => {
    try {
        const res = await fetch(url);
        if (!res.ok) {
            console.error('Error!', res.status);
            return null;
        }

        return await res.json();
    } catch (error) {
        console.error('Error!', (error as Error).message);
        return null;
    }
}