export const adaptJsonFirestore = (object: any) => {
    return JSON.parse(JSON.stringify(object));
}
