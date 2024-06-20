const colors = ['blue', 'red', 'yellow','violet'];

export const getColor = () => {
    const random = Math.floor(Math.random() * colors.length);
    const color = colors[random];
    return [`bg-${color}-100`, `bg-${color}-100/50`];
};