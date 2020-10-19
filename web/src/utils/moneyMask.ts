export default function moneyMask(n: number) {
    return n.toString().replace(/(\d{1})(\d{1,2})$/,"$1,$2");
}