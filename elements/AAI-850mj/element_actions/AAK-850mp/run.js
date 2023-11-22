function(instance, properties, context) {
	
    
	var data = { referrerAccountId: properties.wyre_account_number,
                 amount: properties.amount,
                 dest: properties.dest,
                 destCurrency: properties.destcurrency,
                 sourceCurrency: properties.sourcecurrency    
                     
               };

	instance.data.pay(data);


}