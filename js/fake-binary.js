function fakeBin(x){

    let array = x.split('');

    for (let i = 0; i < array.length; i++) {
       array[i] >= 5 ? array[i] = '1' : array[i] = '0';
    }

    return array.join('');
}

console.log(fakeBin('45385593107843568'));