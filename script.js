const input =document.querySelector('input'),
button =document.querySelector('button'),
copyBtn =document.querySelector('span.far'),
copy =document.querySelector('.copy'),
copyActive=document.querySelector('span.fas');

let chars=
'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';
button.onclick = () => {
    let i,
    randompassword='';
    copyBtn.style.display ='block';
    copyActive.style.display ='none';
    for (i=0; i<16;i++) {
        randompassword =
        randompassword + chars.charAt(Math.floor(Math.random() *chars.length));
    }
    input.value = randompassword;
};

copy.onclick = () => {
    copyBtn.style.display = 'none';
    copyActive.style.display = 'block';
    input.select();
    navigator.clipboard.writeText(input.value);
  };