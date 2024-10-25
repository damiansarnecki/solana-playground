export function shortenAddress(address: string, chars: number = 4): string {
    const start = address.slice(0, chars);
    const end = address.slice(-chars);
    return `${start}...${end}`;
}