export const SaveLocalStorage = (key, element) => {
    // Conseguir los elementos que ya tenemos en el LocalStorage
    let items = JSON.parse(localStorage.getItem(key));
    // Comprobar si es un array
    if (Array.isArray(items)) {
        items.push(element)
    } else {
        items = [element];
    }

    // Guardar en el Local Storage

    localStorage.setItem(key, JSON.stringify(items))

    // Devolver objeto

    return element;
}