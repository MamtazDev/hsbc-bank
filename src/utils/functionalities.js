export const getAllCurrencyRate = async()=>{
    const res = await fetch("https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_jJnwLTgXyu7CxojgGL85ot9tVLzZURVLQNDTIpeN")
    const resData = await res.json()
    return resData?.data
}

export const convertCurrency = (allData,currencyData,value,fields)=>{
const baseCurrency = allData[`${currencyData.currency}`]/allData[`${currencyData.baseCurrency}`]
const convertedCurrency = allData[`${currencyData.baseCurrency}`]/allData[`${currencyData.currency}`]
    if(fields==="first"){
        return {
            baseCurrency: currencyData.baseCurrency,
            baseCurrencyValue: value,
            currency:currencyData.currency,
            currencyValue:baseCurrency*value
        }
    }

    if(fields==="second"){
        return{
            baseCurrency: currencyData.baseCurrency,
            baseCurrencyValue: convertedCurrency*value,
            currency:currencyData.currency,
            currencyValue:value
        }
    }
}
