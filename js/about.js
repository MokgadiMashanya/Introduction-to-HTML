window.onload=()=>
{
    //personal details
    var arrli=new Array('<h3>Personal Details</h3>','<li>Name - Mokgadi Rejoice Mashanya</li>','<li>Date of Birth - 22 June 1996</li>');
    var ultag=document.getElementById('ultagpersonal');
    for (let index = 0; index < arrli.length; index++) {
        ultag.innerHTML=arrli;
    }

    //Education details
    var arrli=new Array('<h3>Educational background</h3>','<li>High School - Seagotle High School</li>','<li>Tertiary - Tshwane University Of Technology</li>');
    var ultag=document.getElementById('ultagEducation');
    for (let index = 0; index < arrli.length; index++) {
        ultag.innerHTML=arrli;
    }

     //Current Activities details
     var arrli=new Array('<h3>Current Activities</h3>','<li>Learning Coding through Mlad codetribe</li>','<li>Going through Html basics</li>');
     var ultag=document.getElementById('ultagCurrentAct');
     for (let index = 0; index < arrli.length; index++) {
         ultag.innerHTML=arrli;
     }

    var image_cover=document.getElementById('image_cover');
    image_cover.src='assets/imgs/body_img.jpg';
    image_cover.alt='banner';
    image_cover.width="1300";
    image_cover.height="600";
    image_cover.style="object-fit: cover";

    var image_profile=document.getElementById('image_profile');
    image_profile.src='assets/imgs/mokgadi.jpg';
    image_profile.alt='profile picture';
    image_profile.width="300";
    image_profile.height="300";
    image_profile.style="border-radius: 50%; object-fit: cover; border: 5px solid #011456";

}