$(function() {
  $(window).load(function() {
      var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545"));
      var lottery;
      web3.eth.defaultAccount = web3.eth.accounts[3];
      $.getJSON('Lottery.json', function(data) {
              lottery = web3.eth.contract(data["abi"]);
              var foo = lottery.at("0x04d872b00c7f2bad88ef23d4d09732551e11c715");
              //console.log(web3.toEth(web3.eth.balanceAt('0x7c7490bf9f1aa01be0a733818e588a7af167b524')));
             // console.log(foo.buyLotteryTickets({from: web3.eth.accounts[3], value: web3.toWei(3, "ether")})); 
              //foo.closeGame({from:web3.eth.accounts[1]});
               //console.log(foo.holderOfAddress(web3.eth.accounts[3]));
              // console.log(foo._eth.getBalance(web3.eth.accounts[3]));
               //foo.makeGuess(3,{from: web3.eth.accounts[3],gas: 1000000});
             //  var result = foo.closeGame({from: web3.eth.accounts[0],gas: 1000000},function(err, res){ console.log(res) });
               //console.log(result);
               //console.log(foo.getPrice({from: web3.eth.accounts[3],gas: 1000000}));
                $("#by").click(function(){
                     var amount = $('#amount').val();
                     foo.buyLotteryTickets({from: web3.eth.accounts[3], value: web3.toWei(amount, "ether")});
                     alert("You just bought "+parseInt(amount) + " tickets");
                 });
                 $("#mg").click(function(){
                     var guess = $('#guess').val();
                     foo.makeGuess(guess,{from: web3.eth.accounts[3],gas: 1000000});
                     alert("You just made a guess on number "+ guess);
                 });
                 $("#gp").click(function(){
                     foo.getPrice({from: web3.eth.accounts[3],gas: 1000000})
                     var balance = foo._eth.getBalance(web3.eth.accounts[3]).c[0];
                     alert("Your balance now is "+balance);
                 });
                 $("#cg").click(function(){
                    foo.closeGame({from:web3.eth.accounts[0],gas: 1000000});
                     alert("Game is closed");
                 });

             });

     
      
    });
});