export const convertCurrency = async(currencyData,value)=>{
const res = await fetch("https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_jJnwLTgXyu7CxojgGL85ot9tVLzZURVLQNDTIpeN")

const resData = await res.json()


const baseRate = resData?.data[`${currencyData.baseCurrency}`]*value
const convertRate = resData?.data[`${currencyData.currency}`]*value
return {
    baseCurrency: currencyData.baseCurrency,
    baseCurrencyValue: baseRate,
    currency:currencyData.currency,
    currencyValue:convertRate
}
}