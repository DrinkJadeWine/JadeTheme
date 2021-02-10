const formatMoney = (number, precision = 2, thousands = ',', decimal = '.') => {
    if (isNaN(number) || number == null) { return 0; }

    number = (number / 100.0).toFixed(precision);

    var parts = number.split('.'),
        dollars = parts[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1' + thousands),
        cents = parts[1] ? (decimal + parts[1]) : '';

    return '$' + dollars + cents;
}

export default formatMoney;