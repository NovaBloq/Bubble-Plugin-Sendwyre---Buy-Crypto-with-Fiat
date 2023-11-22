function(instance, properties, context) {
    
    if (properties.environment == "Production") {
    	instance.data.dropd = "prod"
        instance.data.url = "https://api.sendwyre.com/v3/orders/reserve" 
    }
    else
    {
        instance.data.dropd = "test"
        instance.data.url = "https://api.testwyre.com/v3/orders/reserve" 
    }
    
    
}