const currencyFormatter = Intl.NumberFormat('en-UK', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 0,
});

export default currencyFormatter;