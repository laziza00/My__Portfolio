
// setting modal

let elmodalbox=document.getElementById('darkmodal');
let elSettingbtn=document.getElementById('settingbtn');
let elDarkremove=document.getElementById('darkremove');

elSettingbtn.addEventListener('click',function () {
elmodalbox.classList.add('inner-show');
});

elDarkremove.addEventListener('click',function () {
elmodalbox.classList.remove('inner-show');
 });



// about modal
let elaboutbox=document.getElementById('About');
let elaboutbtn=document.getElementById('aboutbtn');
let elaboutremove=document.getElementById('aboutremove');

elaboutbtn.addEventListener('click',function () {
elaboutbox.classList.add('about-show');
});

elaboutremove.addEventListener('click',function () {
elaboutbox.classList.remove('about-show');
 });



// about modal
let elgetmodalbox=document.getElementById('getmodalbox');
let elgetbtn=document.getElementById('Getbtn');
let elgetremove=document.getElementById('getremove');

elgetbtn.addEventListener('click',function () {
elgetmodalbox.classList.add('about-show');
});

elgetremove.addEventListener('click',function () {
elgetmodalbox.classList.remove('about-show');
 });


// dark light
document.getElementById('darkbtn').addEventListener('click', function () {document.body.classList.toggle('dark');
}
);
document.getElementById('lightbtn').addEventListener('click', function () {document.body.classList.toggle('dark');
}
);


// color
document.getElementById('red').addEventListener('click', function () {document.body.classList.toggle('red');
}
);
document.getElementById('green').addEventListener('click', function () {document.body.classList.toggle('green');
}
);
document.getElementById('blue').addEventListener('click', function () {document.body.classList.toggle('blue');
}
);
document.getElementById('purple').addEventListener('click', function () {document.body.classList.toggle('purple');
}
);
document.getElementById('own').addEventListener('click', function () {document.body.classList.toggle('own');
}
);
document.getElementById('lawngreen').addEventListener('click', function () {document.body.classList.toggle('lawngreen');
}
);
document.getElementById('brown').addEventListener('click', function () {document.body.classList.toggle('brown');
}
);
document.getElementById('turquoise').addEventListener('click', function () {document.body.classList.toggle('turquoise');
}
);
document.getElementById('orangered').addEventListener('click', function () {document.body.classList.toggle('orangered');
}
);
document.getElementById('seagreen').addEventListener('click', function () {document.body.classList.toggle('seagreen');
}
);



// skill show


let eleduitembox=document.getElementById('eduitem');
let eledubtn=document.getElementById('edubtn');


eledubtn.addEventListener('click',function () {
eleduitembox.classList.add('skill-show');
});

// elaboutremove.addEventListener('click',function () {
// elaboutbox.classList.remove('about-show');
//  });