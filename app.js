
//Create Form Element
 const formValidation = ()=>{
     let form = document.createElement('form');
     form.classList.add('form-group');

     form.innerHTML = `
        <div class="container py-3">
         <div class="row justify-content-center align-items-center">
            <div class="col-12 col-md-4">
        <div class="mb-3">
         <label for="name" class="form-label">Name</label>
         <input type="name" name="name" id="name" class="form-control" placeholder="Name" minlength="3">
        </div>
        <div class="mb-3">
         <label for="phone" class="form-label">Phone</label>
         <input type="tel" name="phone" class="form-control" id="phone" placeholder="Phone Number" minlength="6" maxlength="12">
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input type="email" name="email" class="form-control" id="email" placeholder="Email">
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" name="password" class="form-control password" id="password" onkeyup="" placeholder="Password" required minlength="9" maxlength="14">
        </div>
        <div class="mb-3">
          <label for="conPassword" class="form-label">Confirm Password</label>
          <input type="password" name="confirmPassword" class="form-control conPassword" id="conPassword"  placeholder="Confirm Password" required minlength="9" maxlength="14">
          <span id="message"></span>
         </div>
         <button type="submit" class="btn btn-secondary" disabled>Register</button>
       </div>
         </div>
        </div>
     `
     function check () {
         let password = form.querySelector(' div .password').value;
         let conPassword = form.querySelector('div .conPassword').value;
         let input = form.querySelector('input').value;

         if (password != conPassword){
             form.querySelector("span").style.color = "red";
             form.querySelector('span').innerHTML = "Not Matching";

         }
         else{
             form.querySelector('button').removeAttribute('disabled');
             form.querySelector('span').innerHTML = "";
         }
     }
     form.addEventListener('keyup',check);

     document.querySelector('body').append(form);

 }
 formValidation();