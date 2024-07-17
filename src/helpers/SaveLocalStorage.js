export const SaveLocalStorage = (key, element) => {
    let items = localStorage.getItem(key);
    let parsedItems = [];
    if (items) {
        parsedItems = JSON.parse(items);
        if (Array.isArray(parsedItems)) {
            parsedItems.push(element)
        } else {
            parsedItems = [element];
        }
    } else {
        parsedItems = [element];
    }
    localStorage.setItem(key, JSON.stringify(parsedItems))

    return element;
}