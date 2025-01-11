type CallbackFunction = () => void;

export const copyToClipboard = async (text: string, callback?: CallbackFunction): Promise<void> => {
    try {
        await navigator.clipboard.writeText(text);
        if(callback) callback();
    } catch (error) {
        console.error("Ошибка при копировании текста: ", error);
    }
};