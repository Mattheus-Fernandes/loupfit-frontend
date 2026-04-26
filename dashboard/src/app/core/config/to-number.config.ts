export const toNumber = (value: number | null): number => {
    return parseFloat(String(value).replace(",", "."))
}