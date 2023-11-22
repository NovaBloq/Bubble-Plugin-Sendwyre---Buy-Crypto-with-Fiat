function(instance, context) {
    

    instance.data.pay = (data) => {

		fetch(instance.data.url, {
  			method: 'POST',
  			headers: {
    			'Content-Type': 'application/json',
            	'Authorization': context.keys.Authorization
  			},
  			body: JSON.stringify(data),
            
		})
    
		.then((response) => response.json())
     
        
		.then((data) => {
            
            instance.publishState('link', data.url )
            
                      
            var widget = new Wyre({
                env: instance.data.dropd,
                reservation: data.reservation,
                operation: {
                    type: 'debitcard-hosted-dialog'
                }
            });
                

            widget.on("paymentSuccess", function (e) {
                instance.publishState('order_id', e.data.data.orderId )
                instance.publishState('account_id', e.data.data.accountId )
                instance.publishState('destination', e.data.data.dest )
                instance.publishState('transfer_id', e.data.data.transferId )
                instance.publishState('fees', e.data.data.fees )
                instance.publishState('amount', e.data.data.destAmount )
                instance.triggerEvent('payment_success');
                
            });
            
            widget.open();            
            
            
		})
    

		.catch((error) => {
  			instance.publishState('error', error.message);
            instance.triggerEvent('wyre_payment_failed');
		});

        
    }   
    
    

}