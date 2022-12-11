function main () {
    const input = document.getElementById('example') as HTMLInputElement;
    let arrayList = input?.value.replace(/\s/g, '').split(',')
    let myContainer = <HTMLElement>document.getElementById('result');
    myContainer.innerHTML = "Результат: " + removeDuplicate(arrayList) ;



}

function removeDuplicate (arrayList: any) {
    const uniqSet = new Set(arrayList);
    return [...uniqSet];
}
