const currencyFormatter = Intl.NumberFormat('en-UK', {
    style: 'currency',
    currency: 'GBP',
    minimumFractionDigits: 2,
});

export default currencyFormatter;