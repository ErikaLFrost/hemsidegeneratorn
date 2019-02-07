function button() {
    //bengal katten
    if(document.getElementById('cat1').checked) {

        document.getElementById('stylesheet').href="bengal.css";
        document.getElementById("demo").innerHTML = "bengal";
        document.getElementById('myImage').src='bengalcat.jpg';
     
        
       
        //font
        if(document.getElementById("font1").checked) {
            document.getElementById("googlefont").style="font-family: 'Indie Flower', cursive;";
            

        }
        else if (document.getElementById("font2").checked){
            document.getElementById("googlefont").style="font-family: 'Orbitron', sans-serif;";
            
        }
        else if (document.getElementById("font3").checked){
            document.getElementById("googlefont").style="font-family: 'Permanent Marker', cursive;";
            
        } }

    //russian katt
    else if(document.getElementById('cat2').checked) {
        //css
        document.getElementById('stylesheet').href="russian.css";
        document.getElementById("demo").innerHTML = "russian";

        //bild
        document.getElementById('myImage').src='russian_blue.jpg';

        //font
        if(document.getElementById("font1").checked) {
            document.getElementById("googlefont").style="font-family: 'Indie Flower', cursive;";
            

        }
        else if (document.getElementById("font2").checked){
            document.getElementById("googlefont").style="font-family: 'Orbitron', sans-serif;";
            
        }
        else if (document.getElementById("font3").checked){
            document.getElementById("googlefont").style="font-family: 'Permanent Marker', cursive;";
            
        }  }
        //sphynx katt
        else if(document.getElementById('cat3').checked) {
        
        //css
        document.getElementById('stylesheet').href="sphynx.css";

        document.getElementById("demo").innerHTML = "sphynx";
        //bild
        document.getElementById('myImage').src='sphynx.jpeg';

        //font
        if(document.getElementById("font1").checked) {
            document.getElementById("googlefont").style="font-family: 'Indie Flower', cursive;";
            

        }
        else if (document.getElementById("font2").checked){
            document.getElementById("googlefont").style="font-family: 'Orbitron', sans-serif;";
            
        }
        else if (document.getElementById("font3").checked){
            document.getElementById("googlefont").style="font-family: 'Permanent Marker', cursive;";
            
        } 
    }
}


        
   



