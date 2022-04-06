
 
 var samosa = 90;
    var Fruit_Juices = 100;
    var Chole_Bhature = 250;
    var Daal_Baati = 150;
    var Cakes = 140;
    var total = 0;
    var check = 1;
    var gw;
    var sfood;
    var perkg;

    // returns the first Element within the document that matches the specified selector

    var adder = document.querySelector("#getme");        // getme  --> id for add to cart
    adder.addEventListener("click", getMe);    // first arg. takes the event to listen for, and a second argument to be called whenever the described event gets fired
    
    var by = document.querySelector("#out");         // out  --> id for pay bill
    by.addEventListener("click", checkOut);
   
    var cme = document.querySelector("#clr");         // clr --> id for clear text area
    cme.addEventListener("click", clearMe);

    // ------------ all functions below --------------- //

    function getMe() {
      sfood = document.querySelector("#sf").value;      // sf  --> id for list of food items
      perkg = parseFloat(document.querySelector("#entrybox").value);      // entrybox  --> id for input amount of food items to buy
      gw = document.querySelector("#writeme");            // writeme  --> id for Text Area
      if (Number.isNaN(perkg) === true) {                 // checks the condition for the input value being a number or not
        alert("Only Numbers !!! Or The Field is Empty");
        check = 0;
      }
      else if (perkg<0) {                                // checks the condition for input value being lesser than 0
        alert("Negative value!! @stupid");
        check = 0;
      }
      else{
        check = 1;
      }
      if (check == 1) {
     
        switch (sfood) {                               // this will execute one true condition at a time
          case "Samosa":
            var sam = samosa * perkg;                                       // the value will get saved in variable 'sam'
            gw.value += "Samosa " + perkg + " pcs = " + sam + " rs\r";
            total += sam;                                                   // the value will get saved in 'total' since initially 'total' = 0
            perkg.value = "";                                                // refreshes the 'perkg' variable for next amount of pcs
            break;
          case "Fruit Juices":
            var fj = Fruit_Juices * perkg;
            gw.value += "Fruit Juices " + perkg + " pcs = " + fj + " rs\r";
            total += fj;
            perkg.value = "";
            break;
          case "Chole Bhature":
            var cb = Chole_Bhature * perkg;
            gw.value += "Chole Bhature " + perkg + " pcs  = " + cb + " rs\r";
            total += cb;
            perkg.value = "";
            break;
          case "Daal Baati":
            var db = Daal_Baati * perkg;
            gw.value += "Daal Baati " + perkg + " pcs  = " + db + " RS\r";
            total += db;
            perkg.value = "";
            break;
          case "Cakes":
            var cake = Cakes * perkg;
            gw.value += "Cakes " + perkg + " pcs  = " + cake + " rs\r";
            total += cake;
            perkg.value = "";
            break;
        }

      }
    }

    function checkOut() {
      gw.value += "--------------------------------------------------------------\r";
      gw.value += "Your Total Bill Is = " + total + " rs Thanks For Shopping! :)\r";        // total displayed of the buyed items
      gw.value += "--------------------------------------------------------------\r";
      total = 0;                              // refreshes the 'total' variable for next buying of food item 
    }
    function clearMe () {
      gw.value = "";
    }


    